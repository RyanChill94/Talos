<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*  #TODO test router


//test route
Route::any('queryDelete', ['uses' => 'StudentController@queryDel']);
//带参数
Route::any('getUser/{id}', ['uses' => 'StudentController@getModelFun']);

Route::any('getrequest', 'StudentController@request1');

*/

// 引入中间件
Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'AngularController@serveApp');

    Route::get('/unsupported-browser', 'AngularController@unsupported');

    // 使用 session
    Route::any('session1', ['uses' => 'StudentController@session1']);
    Route::any('session2', ['uses' => 'StudentController@session2']);

});

//public API routes
$api->group(['middleware' => ['api']], function ($api) {

    // Authentication Routes...
    $api->post('auth/login', 'Auth\AuthController@login');
    $api->post('auth/register', 'Auth\AuthController@register');

    $api->get('all', 'UserController@getAllUser');

    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');

});

//protected API routes with JWT (must be logged in)
$api->group(['middleware' => ['api', 'api.auth']], function ($api) {

    $api->get('users/me', 'UserController@getMe');

    // 修改自身信息
    //$api->get('users/me','UserController@putMe');
});



