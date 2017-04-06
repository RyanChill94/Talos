<?php
/**
 * Created by PhpStorm.
 * User: qiuyuhan
 * Date: 2017/3/20
 * Time: 9:37
 */

namespace App\Http\Controllers;

//声明基类的位置

use App\Student;
use App\User_signup;
use Illuminate\Http;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\DocBlock\Tags\See;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Contracts\Routing\ResponseFactory;




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
        $num = Student::destroy(1081, 1091);
        $num = Student::destroy([1021, 1081]);

        // 通过条件去删除
        $num = Student::where('id', '<', '10024')->delete();
        var_dump($num);
    }

    public function getModelFun()
    {
        //调用模型的方法
        return User_signup::getAllUser();
    }

    public function request1(\Illuminate\Http\Request $request)
    {
        $request->input('name'); // 取一个特定的值 ?name = sean
        $request->input('name', 'default'); //，默认值
        $request->has('name');
        $request->all();   // 获取所有参数

        //判断请求类型
        $request->method();   // 判断
        $request->isMethod('GET');  // 判断是否是指定类型的请求

        $request->ajax();  // 判断是否是ajax请求
        $request->is('student/*'); // 判断是否是满足要求的路由

        $request->url();

    }

    // 注册request 实例
    public function session1(\Illuminate\Http\Request $request)
    {
        // HTTP requset session
//        $request ->session() -> put('key1','value1');
//        $request ->session() -> get('key1');

        // session
//        session() -> put('key1','value1');
//        session() -> get('key1');

        // Session 实例
//        Session::put('key1', 'value1');
//        Session::get('key1');
//        Session::get('key2', 'default');
        // 以数组的形式存储
//        Session::put(['key3' => 'default']);

        // 把数据存进session 里面
        Session::push('student', 'ryan');
        Session::push('student', 'chill');

        // 取出所有session的值

        if (Session::has('key1')) {
            $res = Session::all();
            dd($res);
        } else {
            echo "you fool";
        };

        // 删除
        //清空指定
        Session::forget("key2");
        //清空所有
        Session::flush();

        // 暂存数据 只有第一次访问的时候存在
        Session::flash("name-flash",'abc');
        Session::get("name-flash");


    }

    public function session2(\Illuminate\Http\Request $request)
    {
        $res = Session::get('student', 'default');
        var_dump($res);
    }

    // response

    //Controller之json及重定向
    public function response1() {
        $arr = [
            'errCode' => 0,
            'status' => 'success',
            'data' => 'test'
        ];
        // 将数组转化为json格式
        //return response()->json($arr);
//        return Response::json($arr);
        return response()->json($arr);

        // 方法1: redirect('待重定向的url')
        //return redirect('session1');

        // 方法2: (跳转前添加一条一次性的session数据)
        // return redirect('session1')->with('msge', '我是一条快闪数据');

        // 方法3:
        // return redirect()->action('StudentController@session1')->with('msge', '我是一条快闪数据');

        // 方法4: (路由别名的方式重定向)
        // return redirect()->route('s');

        // 方法5: (返回上一页重定向)
        //return redirect() -> back();
    }


}