<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function add_review(Request $request)
    {
        $investorID = Auth::id();

        if (!$investorID) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }

        $review = Review::create([
            'rating' => $request->rating,
            'description' => $request->description,
            'investor_id' => $investorID,
            'business_id' => $request->business_id
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Review added successfully'
        ]);
    }

    public function get_reviews()
    {
        $entrepreneurID = Auth::id();

        if (!$entrepreneurID) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }

        $businessID = Business::where('entrepreneur_id', $entrepreneurID)->value('id');

        if (!$businessID) {
            return response()->json([
                'status' => 204,
                'message' => 'No Business Found'
            ]);
        }

        $reviews = Review::where('business_id', $businessID)->get();

        return response()->json([
            'status' => 200,
            'message' => 'Reviews Retrieved successfully',
            'reviews' => $reviews
        ]);
    }
}
