import {ContentService} from './services/content.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('ContentService', ContentService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService);
