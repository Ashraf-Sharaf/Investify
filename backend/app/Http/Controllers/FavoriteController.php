<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function add_favorite(Request $request)
    {
        $investorID = Auth::id();

        if (!$investorID) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }

        $favorite = Favorite::create([
            'investor_id' => $investorID,
            'business_id' => $request->business_id,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Business added to favorites'
        ]);
    }

    
    public function remove_favorite(Request $request)
    {
        $investorID = Auth::id();

        if (!$investorID) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }

        $businessID = $request->business_id;
        $favorite = Favorite::where(['investor_id' => $investorID, 'business_id' => $businessID])->delete();


        return response()->json([
            'status' => 200,
            'message' => 'Business removed from favorites'
        ]);
    }
}
