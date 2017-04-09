<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

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
}
