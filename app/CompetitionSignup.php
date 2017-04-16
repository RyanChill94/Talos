<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompetitionSignup extends Model
{
    //
    protected $table = 'competition_signup';

    protected $fillable = ['user_id','competition_id','entrants','phone','sex','grade','class','attend_time'];
}
