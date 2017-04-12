export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    let getView = (viewName) => {
        return `./views/app/pages/${viewName}/${viewName}.page.html`;
    };

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            data: {auth: false},//{auth: true} would require JWT auth
            //data: { auth : true}, // 开启权限认证
            views: {
                header: {
                    templateUrl: getView('header')
                },
                footer: {
                    templateUrl: getView('footer')
                }
            }
        })
        .state('app.landing', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        })
        .state('app.login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: getView('login')
                }
            }
        })
        .state('app.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        })
        .state('app.doc', {
            url: '/doc',
            views: {
                'main@': {
                    templateUrl: getView('doc')
                }
            }
        })
        .state('app.main_App', {
            abstract: true,
            data: {auth: false},//{auth: true} would require JWT auth
            views: {
                'main@': {
                    templateUrl: getView('main-app')
                }
            }
        })
        .state('app.main_App.now', {
            url: '/now',
            data: {auth: false},
            views: {
                nav: {
                    templateUrl: getView('nav-bar-left')
                },
                section: {
                    templateUrl: getView('show-competitions')
                }
            }
        })
        .state('app.main_App.future', {
            url: '/future',
            data: {auth: false},
            views: {
                nav: {
                    templateUrl: getView('nav-bar-left')
                },
                section: {
                    templateUrl: getView('show-competitions-future')
                }
            }
        })
        .state('app.main_App.mine', {
            url: '/mine',
            data: {auth: false},
            views: {
                nav: {
                    templateUrl: getView('nav-bar-left')
                },
                section: {
                    templateUrl: getView('my-competitions')
                }
            }
        })
        .state('app.main_App.feedback', {
            url: '/feedback',
            data: {auth: false},
            views: {
                nav: {
                    templateUrl: getView('nav-bar-left')
                },
                section: {
                    templateUrl: getView('show-competitions-future')
                }
            }
        })

}
