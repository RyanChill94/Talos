class NavHeaderController {
    constructor() {
        'ngInject'

        //let navHeader = this;
        // ContextService.me(function (data) {
        //     navHeader.userData = data
        // })

        //mock data
        const rawData = {
            "errors": false,
            "data": {
                "user": {
                    "id": 1,
                    "name": "admin",
                    "email": "admin@example.com",
                    "avatar": "",
                    "email_verified": "1",
                    "email_verification_code": "",
                    "created_at": "2016-04-20 00:56:27",
                    "updated_at": "2017-04-05 20:21:02"
                },
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xhcmF2ZWwtYWRtaW4uaGVyb2t1YXBwLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTQ5MTQ3MjM0MCwiZXhwIjoxNDkxNDkwMzQwLCJuYmYiOjE0OTE0NzIzNDAsImp0aSI6IjI2ZmFiM2U5NDkzMDcxZWFiM2U2MjUzM2U1MDI2OGZjIn0.krgP7aqoQxGj5KkWbMTcjHg7qVFe9kYFWto9inh_wOA"
            }
        };

        this.userData = rawData.data.user;
        this.errorFlag = rawData.errors;

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
