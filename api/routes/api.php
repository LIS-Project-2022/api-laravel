<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UsuarioController;
use App\Http\Controllers\Api\TipoUsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});

Route::controller(UsuarioController::class)->group(function(){
    Route::get('/usuarios', 'index');
    Route::get('/usuarios/{id}', 'show');
    Route::post('/usuarios', 'store');
    Route::put('/usuarios/{id}', 'update');
    Route::delete('/usuarios/{id}', 'destroy');
});

Route::get('/tiposusuario', [TipoUsuarioController::class, 'index']);