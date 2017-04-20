import {FeedbackComponent} from './app/components/feedback/feedback.component';
import {GridListFutureComponent} from './app/components/grid-list-future/grid-list-future.component';
import {MyListComponent} from './app/components/my-list/my-list.component';
import {GridListComponent} from './app/components/grid-list/grid-list.component';
import {NavHeaderComponent} from './app/components/nav-header/nav-header.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('feedback', FeedbackComponent)
	.component('gridListFuture', GridListFutureComponent)
	.component('myList', MyListComponent)
	.component('gridList', GridListComponent)
	.component('navHeader', NavHeaderComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);

