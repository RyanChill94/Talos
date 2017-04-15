<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Competition extends Model
{
    //指定表名
    protected $table = 'competition_list';

    //指定id
    protected $primaryKey = 'id';

    //指定允许批量赋值的字段
    protected $fillable = ['name','age'];
}
