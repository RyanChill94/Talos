import {TabDialogController} from '../../../dialogs/tab-dialog/tab-dialog.dialog.js';
import {FormDialogController} from '../../../dialogs/form-dialog/form-dialog.dialog';


// import { formDialogController } from '../../../dialogs/tab-dialog/tab-dialog.dialog.js';

class GridListController {
    constructor(DialogService, $log, API) {
        'ngInject';

        this.DialogService = DialogService;
        this.API = API;
        this.log = $log;


        let fetch = this.API.service('now', this.API.all('race'));

        fetch.one().get()
            .then((response) => {
                let data = response.plain().data.items;
                this.log.log(data);

                this.items = data;
            });

    }

    $onInit() {

    }

    // 马上报名
    signUpNow($index) {
        let transData = {
            comId: this.items[$index].id,
            name: this.items[$index].name,
            time: this.items[$index].start_at,
            action: 'signup'
        };

        let options = {
            controller: FormDialogController,
            controllerAs: 'vm',
            locals: {
                transData: transData
            }
        };
        this.DialogService.fromTemplate('form-dialog', options);
    }

    // 赛事详情
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

export const GridListComponent = {
    templateUrl: './views/app/components/grid-list/grid-list.component.html',
    controller: GridListController,
    controllerAs: 'vm',
    bindings: {}
};
