import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { tokenNotExpired } from 'angular2-jwt';
import { IUser } from '../models/user';

@Injectable()

export class AuthService {
    private baseUrl: String = 'https://meanback.herokuapp.com/users/';

    // Return logged status: Boolean
    get isAuthenticated() {
        return tokenNotExpired('id_token');
    }

    // Return user data
    get User(): IUser {
        return <IUser>JSON.parse(localStorage.getItem('user'));
    }

    constructor(private _http: HttpClient, private _router: Router) {}

    // Authenticating User
    authenticate(res) {
        if (res.success === true) {
            localStorage.setItem('id_token', res.token);
            localStorage.setItem('user', JSON.stringify(res.data));
            this._router.navigate(['dashboard']);
        }
        return res;
    }

    // Getting all users
    getUsers(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this.baseUrl + 'all')
            .map(this.extractData)
            .pipe(catchError(this.handleError));
    }

    // Register new user
    register(user) {
        const httpOptions = { headers: new HttpHeaders() };
        httpOptions.headers.append('Content-Type', 'application/json');

        return this._http.post(this.baseUrl + 'register', user, httpOptions)
            .pipe(catchError(this.handleError));
    }

    // Login user
    login(user) {
        const httpOptions = { headers: new HttpHeaders() };
        httpOptions.headers.append('Content-Type', 'application/json');

        return this._http.post(this.baseUrl + 'authenticate', user, httpOptions)
            .map(res => this.authenticate(res))
            .pipe(catchError(this.handleError));
    }

    // Logout user
    logout() {
        localStorage.clear();
    }

    // Extracting data from resonse
    extractData(res) {
        return res.data;
    }

    // Error Handling
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        return Observable.throw(errorMessage);
    }
}
