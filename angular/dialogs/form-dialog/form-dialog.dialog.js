export class FormDialogController {
    constructor(DialogService, $log, API, $state, $rootScope,ToastService,transData) {
        'ngInject';

        this.DialogService = DialogService;
        this.ToastService = ToastService;
        this.API = API;
        this.log = $log;
        this.transData = transData;
        this.state = $state;

        this.name = this.transData.name;
        this.id = this.transData.comId;
        this.info = this.transData.info || {};


        console.log(this.transData);
        // init
        this.signup = {
            'name' : this.name,
            'userId' : $rootScope.me.id,
            'comId' : this.id,
            'action' : this.transData.action,
            'entrants': this.info.entrants || '',
            'phone' : this.info.phone || '',
            'gender' :　this.info.sex || '' ,
            'grade' : this.info.grade || '',
            'class' : this.info.class || '',
        }

    }

    save() {

        // submit form
        // api/race/attend
        let attend = this.API.service('attend', this.API.all('race'));
        let $state = this.state;
        let toast = this.ToastService;
        let action = this.transData.action;

        console.log(this.signup);
        attend.post(this.signup).then(
            (reponse) => {
                if( action == 'signup'){
                    if(reponse.plain().data.attend){
                        console.log(reponse.plain());
                        toast.show('报名成功!');
                        $state.go('app.main_App.mine');
                    }else{
                        toast.show('未成功报名，请稍后重试')
                    }

                }else if( action == 'modify'){
                    toast.show('修改成功!');
                    $state.refresh();
                }
            }
        ).catch(function (err) {

        });


        this.DialogService.hide();
    }

    cancel() {

        this.DialogService.cancel();
    }
}

