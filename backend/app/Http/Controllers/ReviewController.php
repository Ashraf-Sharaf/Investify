<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function add_review(Request $request){
        $investor=Auth::id();

        if (!$investor) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }

        $review=Review::create([
            'rating'=>$request->rating,
            'description'=>$request->description,
            'investor_id'=>$investor,
            'business_id'=>$request->business_id
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Review added successfully'
        ]);
    }
}
