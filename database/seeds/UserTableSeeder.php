<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'name' => 'RyanChill',
                'email' => '278839211@qq.com',
                'password' => bcrypt('abcd1234'),
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ]
            ,[
                'id' => 2,
                'name' => 'test',
                'email' => 'abcd@qq.com',
                'password' => bcrypt('12341234'),
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 3,
                'name' => 'qiuyuhan',
                'email' => 'abc@qq.com',
                'password' => bcrypt('12341234'),
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ]
        ]);
    }
}
