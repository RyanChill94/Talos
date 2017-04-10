import {TabDialogController} from '../../../dialogs/tab-dialog/tab-dialog.dialog.js';
import {FormDialogController} from '../../../dialogs/form-dialog/form-dialog.dialog';


// import { formDialogController } from '../../../dialogs/tab-dialog/tab-dialog.dialog.js';

class GridListController {
    constructor(DialogService) {
        'ngInject';

        // #TODO use Service to fetch data
        // mock data
        const rawData = {
            error: 'false',
            items: [
                {id: 1001, name: '十佳歌手1', time: '2017-3-3'},
                {id: 1002, name: '十佳歌手2', time: '2017-3-3'},
                {id: 1004, name: '十佳歌手3', time: '2017-3-3'},
                {id: 1003, name: '十佳歌手4', time: '2017-3-3'},
                {id: 1007, name: '十佳歌手5', time: '2017-3-3'}
            ]
        };


        this.items = rawData.items;
        this.DialogService = DialogService;
    }

    $onInit() {
    }

    // 马上报名
    signUpNow($index) {
        let transData = {
            comId: this.items[$index].id,
            name: this.items[$index].name,
            time: this.items[$index].time
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

    // 赛事报名
    getComDetail($index) {

        // console.log(this.items.future[index]);

        // 要传输的数据
        let transData = {
            comId: this.items[$index].id,
            name: this.items[$index].name,
            time: this.items[$index].time
        };

        let options = {
            controller: TabDialogController,
            controllerAs: 'vm',
            clickOutsideToClose: true,
            // targetEvent: $event,
            // 要传输的数据
            locals: {
                transData : transData
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
