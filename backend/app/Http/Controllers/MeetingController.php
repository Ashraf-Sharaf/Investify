<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use App\Models\Attendee;
use App\Models\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class MeetingController extends Controller
{
    public function create_meeting(Request $request)
    {
        $userID=Auth::id();

        $request->validate([
            'date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'link' => 'required|string'
        ]);

        $meeting = Meeting::create([
            'date' => $request->date,
            'start_time' => $request->start_time,
            'link' => $request->link
        ]);

        Attendee::create([
            'user_id'=>$userID,
            'meeting_id'=>$meeting->id
        ]);

        Attendee::create([
            'user_id'=>$request->user_id,
            'meeting_id'=>$meeting->id
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Meeting created succeffuly',
            'meeting_details' => $meeting
        ]);
    }

    public function edit_meeting(Request $request)
    {
        $data = $request->validate([
            'date' => 'date',
            'start_time' => 'date_format:H:i',
            'link' => 'string'
        ]);

        $meetingID=$request->meeting_id;
        $meeting=Meeting::findOrFail($meetingID);

        foreach ($data as $attribute => $value) {
            if (!is_null($value)) {
                $meeting->$attribute = $value;
            }
        }
        $meeting->save();

        return response()->json([
            'status' => 200,
            'message' => 'Meeting Edited successfully'
        ]);

    }

    public function get_meetings()
    {
        
        $authID = Auth::id();
        $meetingIDs = Attendee::where('user_id', $authID)->pluck('meeting_id');
        $meetings = Meeting::whereIn('id', $meetingIDs)->get();
        $usersID = Attendee::whereIn('meeting_id', $meetingIDs)
        ->where('user_id', '!=', $authID)
        ->pluck('user_id');

        $user=User::whereIn('id',$usersID)->get();
        return response()->json([
            'status' => 200,
            'meetings' => $meetings,
            'other_participant'=>$user
        ]);
    }
    
}
