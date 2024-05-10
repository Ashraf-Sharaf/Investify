<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\InviteInvestorMail;

class EmailController extends Controller
{
    public function send_email(Request $request)
    {
        try {
            Mail::to($request->email)->send(new InviteInvestorMail());
            
            return response()->json([
                'status' => 200,
                'message' => 'Email sent successfully'
            ]);

  
        } catch (\Exception $e) {
    
            return response()->json([
                'status' => 500,
                'message' => 'Failed to send email'
            ]);
        }
    }
}
