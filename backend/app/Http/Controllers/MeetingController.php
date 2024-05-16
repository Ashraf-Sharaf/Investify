<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use App\Models\Attendee;
use App\Models\Participant;
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
}
