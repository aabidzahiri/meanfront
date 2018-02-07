import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    constructor(
        private _auth: AuthService,
        private _router: Router,
        public snackBar: MatSnackBar
    ) {}

    logout() {
        this._auth.logout();
        this.snackBar.open('You are successfully logged out.', 'Hide', { duration: 3000 });
        this._router.navigate(['']);
    }
}
