<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    public function join_event(Request $request){

        $entrepreneurID = Auth::id();

        if (!$entrepreneurID) {
            return response()->json([
                'status' => 403,
                'message' => "Unauthorized"
            ]);
        }

        $participation=Participant::create([
            'entrepreneur_id'=>$entrepreneurID,
            'event_id'=>$request->event_id
        ]);

        return response()->json([
            'status'=>200,
            'message'=>'Participated successfully'
        ]);
    }
}
