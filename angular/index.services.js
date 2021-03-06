import {FetchUserService} from './services/FetchUser.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('FetchUserService', FetchUserService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService);
