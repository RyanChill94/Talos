<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompetitionListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('competition_list', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',30);
            $table->unsignedInteger('catalog_id');
            $table->foreign('catalog_id')->references('id')->on('competition_catalog');
            $table->string('belong')->nullable();   // 归属学院
            $table->string('level');                // 赛事级别
            $table->date('start_at');               // 赛事报名开始时间
            $table->date('end_at');                 // 赛事报名结束时间
            $table->boolean('isExpired');           // 赛事是否已经结束
            $table->text('desc');                   // 赛事描述

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('competition_list');
    }
}
