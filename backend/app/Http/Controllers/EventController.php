<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function create_event(Request $request)
    {
        $hostID = Auth::id();

        $request->validate(([
            'date' => 'required|date',
            'time' => 'required|date_format:H:i',
        ]));

        if (!$hostID) {
            return response()->json([
                'status' => 403,
                'message' => "Unauthorized"
            ]);
        }

        $event = Event::create([
            'host_id' => $hostID,
            'date' => $request->date,
            'time' => $request->time
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Event added successfully'
        ]);
    }

    public function edit_event(Request $request)
    {
        $hostID = Auth::id();

        $data = $request->validate(([
            'date' => 'date',
            'time' => 'date_format:H:i',
        ]));

        if (!$hostID) {
            return response()->json([
                'status' => 403,
                'message' => "Unauthorized"
            ]);
        }
        $eventID = $request->event_id;
        $event = Event::findORFail($eventID);

        foreach ($data as $attribute => $value) {
            if (!is_null($value)) {
                $event->$attribute = $value;
            }
        }
        $event->save();

        return response()->json([
            'status' => 200,
            'message' => 'Event added successfully'
        ]);
    }
}
