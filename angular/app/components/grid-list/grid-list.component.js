class GridListController {
    constructor(DialogService) {
        'ngInject';

        //api server get competition
        //mock data
        const rawData = {
            error: 'false',
            items: {
                now: [
                    {name: '十佳歌手', time: '2017-3-3'},
                    {name: '十佳歌手', time: '2017-3-3'},
                    {name: '十佳歌手', time: '2017-3-3'},
                    {name: '十佳歌手', time: '2017-3-3'},
                    {name: '十佳歌手', time: '2017-3-3'}
                ],
                future: [
                    {name: '挑战杯创业大赛', time: '2017-5-3'},
                    {name: '挑战杯创业大赛', time: '2017-5-3'},
                    {name: '挑战杯创业大赛', time: '2017-5-3'},
                    {name: '挑战杯创业大赛', time: '2017-5-3'}
                ]
            }
        };

        this.items = rawData.items;
        this.DialogService = DialogService;
    }

    $onInit() {
    }

    doPrimaryAction() {
        this.DialogService.alert('第一个动作','hahhahahaha');
    }

    doSecondaryAction() {
        this.DialogService.alert('第二个动作','lallallallala');
    }

    showDialog() {
        alert('aaaaaa');
    }
}

export const GridListComponent = {
    templateUrl: './views/app/components/grid-list/grid-list.component.html',
    controller: GridListController,
    controllerAs: 'vm',
    bindings: {}
};
