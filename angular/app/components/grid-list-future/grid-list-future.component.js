import {TabDialogController} from '../../../dialogs/tab-dialog/tab-dialog.dialog.js';



class GridListFutureController {
    constructor(DialogService, $log, API) {
        'ngInject';

        this.DialogService = DialogService;
        this.API = API;
        this.log = $log;


        let fetch = this.API.service('future', this.API.all('race'));

        fetch.one().get()
            .then((response) => {
                let data = response.plain().data.items;
                this.log.log(data);

                this.items = data;
            });

    }

    $onInit() {

    }

    // 赛事前瞻
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

export const GridListFutureComponent = {
    templateUrl: './views/app/components/grid-list-future/grid-list-future.component.html',
    controller: GridListFutureController,
    controllerAs: 'vm',
    bindings: {}
};
