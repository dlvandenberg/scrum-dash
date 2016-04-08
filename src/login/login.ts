import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { contentHeaders } from '../common/headers';

// let styles		= require('./login.css');
let template	= require('./login.html');
let config		= require('config.json');

@Component({
	selector: 'login';
})
@View({
	directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
	template: template
})
export class Login {
	// Inject the router via Dependency Injection.
	constructor(public router: Router, public http: Http) { }

	login(event, username, password) {
		// This will be called when the user clicks on the login button.
		event.preventDefault();

		let body = JSON.stringify({ username, password });
		this.http.post('http://' + config.url + ':' + config.port + 'jira/rest/auth/1/session', body, { headers: contentHeaders })
			.subscribe(
				response => {
					console.log("Login succesful");
					// localStorage.setItem('jwt', response.json().id_token);
					// this.router.parent.navigateByUrl('/home');
				},
				error => {
					console.log("Login failed");
				}
			);
	}
}