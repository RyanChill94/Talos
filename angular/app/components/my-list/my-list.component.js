import {FormDialogController} from '../../../dialogs/form-dialog/form-dialog.dialog';

class MyListController{
    constructor(DialogService){
        'ngInject';

        // 0 - 已过期  1 - 未过期
        const rawData = {
            error: 'false',
            items: [
                {id: 1001, name: '十佳歌手1', time: '2017-3-3',isExpire:1},
                {id: 1002, name: '上刀山', time: '2017-5-3',isExpire:0},
                {id: 1004, name: '十佳歌手3', time: '2017-3-3',isExpire:1},
                {id: 1007, name: '十佳歌手5', time: '2017-3-3',isExpire:1}
            ]
        };

        this.errorFlag = rawData.error;
        this.items = rawData.items;

        this.DialogService = DialogService;

    }

    $onInit(){
    }

    modify($index) {
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
}

export const MyListComponent = {
    templateUrl: './views/app/components/my-list/my-list.component.html',
    controller: MyListController,
    controllerAs: 'vm',
    bindings: {}
}
