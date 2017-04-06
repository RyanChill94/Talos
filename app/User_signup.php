<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

//定有一个简单的模型
class User_signup extends Model
{
    public static function getAllUser($id)
    {
        return "HAHa" . $id;
    }
}
