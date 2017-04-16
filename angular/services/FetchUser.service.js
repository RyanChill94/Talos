export class FetchUserService{
    constructor ($auth, $rootScope, API) {
        'ngInject'

        this.$auth = $auth;
        this.API = API;
        this.$rootScope = $rootScope;
    }

    // restangular 返回的是一个 promise
    getContent () {
        let $auth = this.$auth;

        if ($auth.isAuthenticated()) {
            let API = this.API;
            let UserData = API.service('me', API.all('users'));

            return UserData.one().get();
        } else {
            return null;
        }
    }

    me (cb) {
        this.$rootScope.$watch('me', function (nv) {
            cb(nv)
        })
    }
}

