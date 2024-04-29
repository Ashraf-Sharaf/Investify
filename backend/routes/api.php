<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\FavoriteController;
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


Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);

Route::post('add_business',[BusinessController::class,'add_business']);
Route::post('edit_business',[BusinessController::class,'edit_business']);
Route::get('all_businesses',[BusinessController::class,'all_businesses']);
Route::get('my_business',[BusinessController::class,'my_business']);


Route::post('add_favorite',[FavoriteController::class,'add_favorite']);
Route::post('remove_favorite',[FavoriteController::class,'remove_favorite']);

Route::post('add_review',[ReviewController::class,'add_review']);
Route::get('get_reviews',[ReviewController::class,'get_reviews']);

