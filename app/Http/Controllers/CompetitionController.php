<?php

namespace App\Http\Controllers;

use App\CometitionList;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\CometitionList as comList;
use App\CompetitionCatalog as Catalog;
use App\CompetitionSignup as Signup;
use Illuminate\Support\Facades\Input;


class CompetitionController extends Controller
{
    public function searchCatalog($id)
    {

//        var_dump($id);
        return Catalog::find($id)->name;
    }

    public function getCompetitionNow()
    {
        $today = date("Y-m-d");
        $race_now = comList::where('start_at', '<', $today)
            ->get();

        foreach ($race_now as $key => $value) {
            $value->catalog = $this->searchCatalog($value->catalog_id);
        }

        return response()->success(['items' => $race_now]);
    }

    public function getCompetitionFuture()
    {
        $today = date("Y-m-d");
        $race_now = comList::where('start_at', '>', $today)
            ->get();
        return response()->success(['items' => $race_now]);

    }

    public function attendCompetition()
    {

        $user_id = \Auth::user()->id;
        $user_action = Input::get('action');

        try {
            $Attend_id = Signup::where([
                'user_id' => $user_id,
                'competition_id' => Input::get('comId')
            ])->value('id');

            // 判断选手该赛事是否已经参加
            if ($Attend_id && $user_action == 'signup') {
                return response()->error('请勿重复报名', 422);
            }

            $attend = Signup::updateOrCreate(['id' => $Attend_id], [
                'user_id' => Input::get('userId'),
                'competition_id' => Input::get('comId'),
                'entrants' => Input::get('entrants'),
                'phone' => Input::get('phone'),
                'sex' => Input::get('gender'),
                'grade' => Input::get('grade'),
                'class' => Input::get('class'),
            ]);

            return response()->success(compact('attend'));

        } catch (\Exception $e) {
            return response()->error($e, 500);
        }

    }

    public function getCompetitionMine()
    {

        $user_id = \Auth::user()->id;

        $race_mine_id = Signup::where('user_id', '=', $user_id)
            ->lists('competition_id');
        $race_mine = comList::whereIn('id', $race_mine_id)->get();

        return response()->success(['items' => $race_mine]);
    }

    public function getCompetitionDetail($userId, $comId)
    {

        $detail = Signup::where([
            'user_id' => $userId,
            'competition_id' => $comId
        ])->first();

        return response()->success($detail);
    }

}
