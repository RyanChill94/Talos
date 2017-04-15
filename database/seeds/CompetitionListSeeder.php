<?php

use Illuminate\Database\Seeder;

class CompetitionListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('competition_list')->insert([
            [
                'id' => 1,
                'name' => 'C语言设计大赛',
                'catalog_id' => 1,
                'belong' => '计算机学院',
                'level' => 1,
                'start_at' => '2017-3-3',
                'end_at' => '2017-7-7',
                'isExpired' => false,
                'desc' => '由计算机学院组织承办的超无聊的比赛，大家不要参加'
            ], [
                'id' => 2,
                'name' => '十佳歌手',
                'catalog_id' => 2,
                'belong' => '校级',
                'level' => 2,
                'start_at' => '2017-3-3',
                'end_at' => '2017-7-7',
                'isExpired' => false,
                'desc' => '由学校组织承办的超无聊的比赛，大家不要参加'
            ], [
                'id' => 3,
                'name' => '汇编语言大赛',
                'catalog_id' => 1,
                'belong' => '计算机学院',
                'level' => 1,
                'start_at' => '2017-3-3',
                'end_at' => '2017-7-7',
                'isExpired' => false,
                'desc' => '由计算机学院组织承办的超无聊的比赛，大家不要参加'
            ], [
                'id' => 4,
                'name' => '挑战杯创业大赛',
                'catalog_id' => 1,
                'belong' => '省级',
                'level' => 3,
                'start_at' => '2017-3-3',
                'end_at' => '2017-7-7',
                'isExpired' => false,
                'desc' => '由计算机学院组织承办的超无聊的比赛，大家不要参加'
            ], [
                'id' => 5,
                'name' => '腾讯校园选拔',
                'catalog_id' => 4,
                'belong' => '计算机学院',
                'level' => 4,
                'start_at' => '2017-5-5',
                'end_at' => '2017-4-4',
                'isExpired' => true,
                'desc' => '由计算机学院组织承办的超无聊的比赛，大家不要参加'
            ], [
                'id' => 6,
                'name' => 'B语言设计大赛',
                'catalog_id' => 1,
                'belong' => '计算机学院',
                'level' => 1,
                'start_at' => '2017-3-3',
                'end_at' => '2017-7-7',
                'isExpired' => false,
                'desc' => '由计算机学院组织承办的超无聊的比赛，大家不要参加'
            ]
        ]);
    }
}
