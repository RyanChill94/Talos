export class TabDialogController{
    constructor(DialogService){
        'ngInject';

        this.DialogService = DialogService;
    }

    save(){
        //Logic here
        this.DialogService.hide();
    }

    cancel(){
        this.DialogService.cancel();
    }
}

