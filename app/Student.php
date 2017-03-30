<?php
/**
 * Created by PhpStorm.
 * User: qiuyuhan
 * Date: 2017/3/21
 * Time: 10:29
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //指定表名
    protected $table = 'Student';

    //指定id
    protected $primaryKey = 'id';

    //自动维护时间戳
    protected $timestamps = false;

    //指定允许批量赋值的字段
    protected $fillable = ['name','age'];


    //格式化时间方法
    protected function  getDateFormat()
    {
        return time();
    }

}