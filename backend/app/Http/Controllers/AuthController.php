<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;
use App\Models\User;
use App\Models\Role;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $role = Role::where('id', $user->role_id)->value('name');

        
        return response()->json([
            'status' => 200,
            'user_role' => $role,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {

        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);


        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id'=>$request->role_id

        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 200,
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 200,
            'message' => 'Successfully logged out',
        ]);
    }

    public function add_photo(Request $request)
    {
        $filename = null;
        $userID = Auth::id();
        $user = User::findOrFail($userID);
        if (!$userID) {
            return response()->json([
                'status' => 400,
                'message' => "Unauthorized"
            ]);
        }
        if ($request->hasFile('profile_image')) {

            if ($user->profile_picture) {
                $oldFilePath = public_path('/profile_pictures/') . $user->profile_picture;
                if (File::exists($oldFilePath)) {
                    File::delete($oldFilePath);
                }
            }

            $file = $request->file('profile_image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move(public_path('/profile_pictures/'), $filename);

            $user->update(['profile_picture' => $filename]);


            return response()->json([
                'status' => 200,
                'message' => "Photo uploaded successfully"
            ]);
        }
        return response()->json([
            'status' => 400,
            'message' => "No photo uploaded"
        ]);
    }
}
