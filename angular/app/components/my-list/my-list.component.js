import {FormDialogController} from '../../../dialogs/form-dialog/form-dialog.dialog';
import {TabDialogController} from '../../../dialogs/tab-dialog/tab-dialog.dialog';

class MyListController{
    constructor(DialogService,API){
        'ngInject';

        this.DialogService = DialogService;
        this.API = API;

        let fetch = this.API.service('mine', this.API.all('race'));

        fetch.one().get()
            .then((response) => {
                let data = response.plain().data.items;
                this.items = data;
            });

    }

    $onInit(){
    }

    modify($index) {
        let transData = {
            comId: this.items[$index].id,
            name: this.items[$index].name,
            time: this.items[$index].time,
            action: 'modify'
        };

        let options = {
            controller: FormDialogController,
            controllerAs: 'vm',
            locals: {
                transData : transData
            }
        };
        this.DialogService.fromTemplate('form-dialog', options);
    }

    getComDetail($index) {

        // console.log(this.items.future[index]);

        // 要传输的数据
        let transData = this.items[$index];

        let options = {
            controller: TabDialogController,
            controllerAs: 'vm',
            clickOutsideToClose: true,
            // targetEvent: $event,
            // 要传输的数据
            locals: {
                transData: transData
            }
        };
        this.DialogService.fromTemplate('tab-dialog', options);
    }
}

export const MyListComponent = {
    templateUrl: './views/app/components/my-list/my-list.component.html',
    controller: MyListController,
    controllerAs: 'vm',
    bindings: {}
}
