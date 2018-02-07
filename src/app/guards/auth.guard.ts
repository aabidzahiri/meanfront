import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
        private _auth: AuthService,
        private _router: Router,
        public snackBar: MatSnackBar
    ) {}

    canActivate() {
        if (this._auth.isAuthenticated) {
            return true;
        } else {
            this.snackBar.open('You are not authorized.', 'Hide', { duration: 3000 });
            this._router.navigate(['**']);
            return false;
        }
    }
}
