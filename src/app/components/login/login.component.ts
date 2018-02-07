import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    constructor(private _auth: AuthService, public snakBar: MatSnackBar) {}
    onSubmit(form) {
        if (form.valid === true) {
            this._auth.login(form.value).subscribe(
                res => {
                    this.snakBar.open(res.message, 'Hide', { duration: 3000 });
                },
                err => console.log(err)
            );
        } else {
            this.snakBar.open('Please provide username & password.', 'Hide', { duration: 5000 });
        }
    }
}
