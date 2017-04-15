<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Competition as Competition;
//use APP\CometitionList as List;
use App\CompetitionCatalog as Catalog;

class CompetitionController extends Controller
{
    public function searchCatalog($id){

//        var_dump($id);
        return Catalog::find($id)->name;
    }
    public function getCompetitionNow(){
        $today = date("Y-m-d");
        $race_now = Competition::where('start_at','<',$today)
            ->get();

        foreach ($race_now as $key => $value){
            $value->catalog = $this->searchCatalog($value->catalog_id);
        }

        return response()->success(['items'=> $race_now]);
    }

    public function getCompetitionFuture(){
        $today = date("Y-m-d");
        $race_now = Competition::where('start_at','>',$today)
            ->get();
        return response()->success(['items'=> $race_now]);

    }

    public  function getCompetitionMy(){

    }

}
