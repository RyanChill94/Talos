export class TabDialogController{
    constructor(DialogService,transData){
        'ngInject';

        this.DialogService = DialogService;
        this.transData = transData;
        this.name = this.transData.name;
        this.id = this.transData.comId;
        this.time = this.transData.time;

    }

    save(){
        //Logic here
        this.DialogService.hide();
    }

    cancel(){
        this.DialogService.cancel();
    }
}

