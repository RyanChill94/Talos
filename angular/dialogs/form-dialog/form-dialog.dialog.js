export class FormDialogController{
    constructor(DialogService,$log,transData){
        'ngInject';

        this.DialogService = DialogService;
        this.log = $log;
        this.transData = transData;
        this.name = this.transData.name;
        this.id = this.transData.comId;

        this.signup = {};
        this.signup.name = this.name;
        this.signup.comId = this.id;
    }

    save(){
        //Logic here
        // #TODO 提交表单
        let commitData = this.signup;

        this.log(commitData);

        // this.$auth.signup(user)
        //     .then((response) => {
        //         //remove this if you require email verification
        //         this.$auth.setToken(response.data);
        //
        //         this.ToastService.show('Successfully registered.');
        //     })
        //     .catch(this.failedRegistration.bind(this));

        this.DialogService.hide();
    }

    cancel(){

        this.DialogService.cancel();
    }
}

