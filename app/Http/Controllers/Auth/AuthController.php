<?php

namespace App\Http\Controllers\Auth;

use Auth;
use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $message = [
            'email.required' => '必须输入电子邮件',
            'email.email' => '非法电子邮件格式',
            'password.required' =>'必须输入密码',
            'password.min' =>'密码记错了吧？'
        ];

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ],$message);

        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->error('Invalid credentials', 401);
            }
        } catch (\JWTException $e) {
            return response()->error('Could not create token', 500);
        }

        $user = Auth::user();

        return response()->success(compact('user', 'token'));
    }

    public function register(Request $request)
    {
        // 自定义验证消息
        $message = ['name.required' => '用户名是必填的',
            'name.min' => '用户名至少 :min 位',
            'name.max' => '用户名至多 :max 位',
            'email.required' => '必须输入电子邮件',
            'email.email' => '非法的电子邮件格式',
            'email.unique' => '该邮箱已经被使用过了',
            'password.required' => '密码是必填的',
            'password.min' => '密码至少 :min 位'
        ];

        // 验证规则
        $this->validate($request, [
            'name' => 'required|min:3|max:15',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ], $message);

        $user = new User;
        $user->name = trim($request->name);
        $user->email = trim(strtolower($request->email));
        $user->password = bcrypt($request->password);
        $user->save();

        $token = JWTAuth::fromUser($user);

        return response()->success(compact('user', 'token'));
    }
}
