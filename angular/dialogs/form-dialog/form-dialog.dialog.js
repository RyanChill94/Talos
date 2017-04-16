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

        this.signup = {};
        this.signup.name = this.name;
        this.signup.userId = $rootScope.me.id;
        this.signup.comId = this.id;
    }

    save() {

        // submit form
        // api/race/attend
        let attend = this.API.service('attend', this.API.all('race'));
        let $state = this.state;
        let toast = this.ToastService;

        console.log(this.signup);
        attend.post(this.signup).then(
            () => {
                toast.show('报名成功!');
                // $state.go('app.main_App.mine');
            }
        );


        this.DialogService.hide();
    }

    cancel() {

        this.DialogService.cancel();
    }
}

