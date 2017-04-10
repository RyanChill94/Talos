export class LoginController{
    constructor(DialogService){
        'ngInject';

        this.DialogService = DialogService;
    }

    save(){
        //Logic here
        alert('23333');
        this.DialogService.hide();
    }

    cancel(){
        this.DialogService.cancel();
    }
}

