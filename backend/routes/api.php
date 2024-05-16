<?php

use App\Http\Controllers\AttendeeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);

Route::post('edit_meeting',[MeetingController::class,'edit_meeting']);
Route::post('join_meeting',[AttendeeController::class,'join_meeting']);
Route::post('get_business',[BusinessController::class,'get_business']);
Route::post('add_photo',[AuthController::class,'add_photo']);

Route::get('get_meetings',[MeetingController::class,'get_meetings']);

Route::group(["middleware" => "entrepreneur.middleware"], function () {

    Route::post('add_business', [BusinessController::class, 'add_business']);
    Route::post('edit_business', [BusinessController::class, 'edit_business']);
    Route::get('my_business', [BusinessController::class, 'my_business']);

    Route::get('get_reviews', [ReviewController::class, 'get_reviews']);

    Route::post('join_event',[ParticipantController::class,'join_event']);
});


Route::group(["middleware" => "admin.middleware"], function () {

    Route::post('create_event', [EventController::class, 'create_event']);
    Route::post('edit_event', [EventController::class, 'edit_event']);
    Route::delete('delete_event/{id}', [EventController::class, 'delete_event']);
    Route::post('invite_investor',[EmailController::class,'send_email']);
});


Route::group(["middleware" => "investor.middleware"], function () {
    Route::get('all_businesses', [BusinessController::class, 'all_businesses']);

    Route::post('add_favorite', [FavoriteController::class, 'add_favorite']);
    Route::post('remove_favorite', [FavoriteController::class, 'remove_favorite']);

    Route::post('add_review', [ReviewController::class, 'add_review']);

    Route::post('create_meeting',[MeetingController::class,'create_meeting']);

});
