export class TabDialogController{
    constructor(DialogService,transData){
        'ngInject';

        this.DialogService = DialogService;
        this.message = transData;
    }

    save(){
        //Logic here
        this.DialogService.hide();
    }

    cancel(){
        this.DialogService.cancel();
    }
}

