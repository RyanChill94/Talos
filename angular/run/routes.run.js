export function RoutesRun($rootScope, $state, $auth, $timeout, FetchUserService,$log) {
    'ngInject';

    // 拦截请求
    let deregisterationCallback = $rootScope.$on("$stateChangeStart", function (event, toState) {

        if (toState.data && toState.data.auth) {
            /*Cancel going to the authenticated state and go back to the login page*/
            if (!$auth.isAuthenticated()) {
                event.preventDefault();
                return $state.go('app.login');
            }
        }

    });

    function stageChange() {
        $timeout(function () {
            // 获取用户信息
            if($auth.isAuthenticated() && !$rootScope.me){
                FetchUserService.getContent()
                    .then(
                        (response) => {
                            response = response.plain();
                            $rootScope.me = response.data;
                        })
                    .catch(function (err) {
                        $log.error(err);
                    });
            }
        })
    }

    $rootScope.$on('$destroy', deregisterationCallback);
    $rootScope.$on('$stateChangeSuccess', stageChange);

}
