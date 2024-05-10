<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\InviteInvestorMail;

class EmailController extends Controller
{
    public function send_email(Request $request)
    {
        Mail::to($request->email)->send(new InviteInvestorMail());
    }
}
