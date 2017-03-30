<?php
/**
 * Created by PhpStorm.
 * User: qiuyuhan
 * Date: 2017/3/20
 * Time: 9:37
 */

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Support\Facades\DB;


class StudentController extends Controller
{
    public function queryDel()
    {
        DB::table('student')->where('id >= ? and age >= ?', [1001, 18])->get();
    }


    public function orm()
    {
        Student::all();
        //$student = new Student();

        $student = Student::firstOrCreate(
            ['mame' => 'immoc']
        );

        // 通过字段名查找属性 如果不存在则创建实例 需要手动调用save方法
        $student = Student::firstOrNew(
            ['mame' => 'immoc']
        );
        $bool = $student->save();


        dd($student);
    }

    public function orm3()
    {
        // 通过模型去更新数据
        $student = Student::find(102);
        $student->name = 'kitty';
        $bool = $student->save();
        var_dump($bool);

    }

    // 通过orm 进行删除
    public function orm4()
    {
        // 通过模型去删除
        $student = Student::find(1021);
        $bool = $student->delete();
        var_dump($bool);

        // 通过主键删除
        $num = Student::destroy(1021);
        $num = Student::destroy(1081,1091);
        $num = Student::destroy([1021,1081]);

        // 通过条件去删除
        $num = Student::where('id','<','10024')->delete();
        var_dump($num);
    }
}