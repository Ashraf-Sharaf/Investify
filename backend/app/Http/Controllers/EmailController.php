<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\InviteInvestorMail;
class EmailController extends Controller
{
    public function send_email(){
        $to="asha.31@outlook.com";
        $message="hello DR!";

        Mail::to($to)->send(new InviteInvestorMail($message));
    }
}
