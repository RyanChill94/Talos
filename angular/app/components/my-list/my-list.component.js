import {FormDialogController} from '../../../dialogs/form-dialog/form-dialog.dialog';
import {TabDialogController} from '../../../dialogs/tab-dialog/tab-dialog.dialog';

class MyListController{
    constructor(DialogService,API,$rootScope){
        'ngInject';

        this.DialogService = DialogService;
        this.API = API;
        this.$rootScope = $rootScope;

        let fetch = this.API.service('mine', this.API.all('race'));

        fetch.one().get()
            .then((response) => {
                this.items = response.plain().data.items;
            });

    }

    $onInit(){
    }

    // 修改报名
    modify($index) {
        // 获取比赛信息
        let com_id = this.items[$index].id;
        let user_id = this.$rootScope.me.id;
        let fetchDeatil = this.API.all('race');
        let DS = this.DialogService;

        fetchDeatil.one('user',user_id).one('com',com_id)
            .get()
            .then(
                (response) => {
                    //console.log(response.data);
                    this.info = response.data;

                    let transData = {
                        comId: com_id,
                        name: this.items[$index].name,
                        info :　this.info,
                        action: 'modify'
                    };

                    let options = {
                        controller: FormDialogController,
                        controllerAs: 'vm',
                        locals: {
                            transData : transData
                        }
                    };

                    DS.fromTemplate('form-dialog', options)
                }
            );
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
