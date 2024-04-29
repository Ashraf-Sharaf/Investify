<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function add_favorite(Request $request)
    {
        $investor = Auth::id();

        if (!$investor) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }

        $favorite = Favorite::create([
            'investor_id' => $investor,
            'business_id' => $request->business_id,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Business added to favorites'
        ]);
    }

    
    public function remove_favorite(Request $request)
    {
        $investor = Auth::id();

        if (!$investor) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }

        $business = $request->business_id;
        $favorite = Favorite::where(['investor_id' => $investor, 'business_id' => $business])->delete();


        return response()->json([
            'status' => 200,
            'message' => 'Business removed from favorites'
        ]);
    }
}
