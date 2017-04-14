class NavHeaderController {
    constructor(FetchUserService, $auth, $log, $state,$rootScope,ToastService) {
        'ngInject'

        this.$auth = $auth;
        this.$log = $log;
        this.$state = $state;
        this.$rootScope = $rootScope;
        this.ToastService = ToastService;

        let navHeader = this;
        let show = $log.log;


        FetchUserService.me(function (data) {
            navHeader.userData = data;
            // navHeader.loginFlag = angular.isDefined(navHeader.userData);
            navHeader.loginFlag = navHeader.isAuthenticated();

            show("userdata=======>", navHeader.userData);
            show("loginFlag======>", navHeader.loginFlag);
        });

    }

    isAuthenticated() {
        this.$log.log(this.$auth.isAuthenticated());
        return this.$auth.isAuthenticated();
    }

    logout() {

        let that = this;
        this.$auth.logout().then(function () {
            delete that.$rootScope.me;
            that.ToastService.show('Successfully logout.');
            // that.$log.log('after delete', that.$rootScope.me);
            that.$state.go('app.login');
        })
    }

    $onInit() {
    }
}

export const NavHeaderComponent = {
    templateUrl: './views/app/components/nav-header/nav-header.component.html',
    controller: NavHeaderController,
    controllerAs: 'vm',
    bindings: {}
}
