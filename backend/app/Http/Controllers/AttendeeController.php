<?php

namespace App\Http\Controllers;

use App\Models\Attendee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AttendeeController extends Controller
{
    public function join_meeting(Request $request){

        $userID = Auth::id();

        if (!$userID) {
            return response()->json([
                'status' => 403,
                'message' => "Unauthorized"
            ]);
        }

        $attendee=Attendee::create([
            'user_id'=>$userID,
            'meeting_id'=>$request->meeting_id
        ]);

        return response()->json([
            'status'=>200,
            'message'=>'Joined meeting successfully'
        ]);
    }
}
