<?php

namespace App\Http\Controllers;

use App\User;
use Auth;
use Illuminate\Http\Request;




class UserController extends Controller
{
    /**
     * Get user current context.
     *
     * @return JSON
     */
    public function getMe()
    {
        $user = Auth::user();
        return response()->success($user);
    }

    public function putMe()
    {
        $user = Auth::user();
        return response()->success($user);
    }



    public  function getAllUser(){
        $user = User::all();
        return response()->success($user);
    }

}
