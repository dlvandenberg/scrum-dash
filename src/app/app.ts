import { View, Component } 								from 'angular2/core';
import { Location, RouteConfig, RouterLink, Router }	from 'angular2/router';

import { LoggedInRouterOutlet }							from './LoggedInOutlet';
import { Home } 										from '../home/home';
import { Login }										from '../login/login';

let template = require('./app.html');

@Component({
	selector: 'scrum-dash'
})
@View({
	template: template,
	directives: [ LoggedInRouterOutlet ]
})
@RouteConfig([
	{ path: '/', redirectTo: ['/Home'] },
	{ path: '/home', component: Home, as: 'Home' },
	{ path: '/login', component: Login, as: 'Login' }
])
export class App {
	constructor(public router: Router) { }
}