<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AhController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

require __DIR__.'/auth.php';

Route::get('/portfolio/websites', function () {
    return Inertia::render('Websites', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/portfolio/designs', function () {
    return Inertia::render('Designs', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/portfolio/animations', function () {
    return Inertia::render('Animations', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/ah411721', [AhController::class, 'main']);
Route::get('/insert', [AhController::class, 'insert']);

Route::post('/insert', [AhController::class, 'store']);
