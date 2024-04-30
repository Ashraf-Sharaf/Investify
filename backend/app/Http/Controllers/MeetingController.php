<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use Illuminate\Http\Request;

class MeetingController extends Controller
{
    public function create_meeting(Request $request)
    {

        $request->validate(([
            'date' => 'required|date',
            'start-time' => 'required|date_format:H:i',
            'end-time' => 'required|date_format:H:i'
        ]));

        $meeting = Meeting::create([
            'date' => $request->data,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time
        ]);


        return response()->json([
            'status' => 200,
            'message' => 'Meeting created succeffuly',
            'meeting_details' => $meeting
        ]);
    }
}
