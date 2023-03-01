<?php

use App\Http\Controllers\DownloadFilesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('download/resume', [DownloadFilesController::class, 'downloadResume']);
Route::get('download/coverletter', [DownloadFilesController::class, 'downloadCoverLetter']);
