import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    constructor(
        private _auth: AuthService,
        private _router: Router,
        public snakBar: MatSnackBar
    ) {}

    onSubmit(form) {
        if (form.valid === true) {
            this._auth.register(form.value).subscribe(
                res => {
                    this.snakBar.open(res.message, 'Hide', { duration: 10000 });
                    this._router.navigate(['login']);
                },
                err => {
                    console.log(err);
                    this.snakBar.open('Something went wrong please check console if you are a developer.', 'Hide', { duration: 15000 });
                }
            );
        } else {
            this.snakBar.open('Form is invalid', 'Hide', { duration: 10000 });
        }
    }
}
