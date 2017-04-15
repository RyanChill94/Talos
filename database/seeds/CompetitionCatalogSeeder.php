<?php

use Illuminate\Database\Seeder;

class CompetitionCatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('competition_catalog')->insert([
            [
                'id' => 1,
                'name' => '程序设计'
            ], [
                'id' => 2,
                'name' => '文体活动'
            ], [
                'id' => 3,
                'name' => '科研创业'
            ], [
                'id' => 4,
                'name' => '企业选拔'
            ]
        ]);
    }
}
