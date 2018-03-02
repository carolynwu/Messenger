import {Component} from "@angular/core";

@Component({
    selector:'app-authentication',
    template: `
            <header class="row spacing">
                <nav class="col-md-8 col-md-offset-2">
                    <ul class="nav nav-tabs">
                        <li routerActive="active"><a [routerLink]="['signup']"> Signup</a></li>
                        <li routerActive="active"><a [routerLink]="['signin']"> Signin</a></li>
                        <li routerActive="active"><a [routerLink]="['logout']"> Logout</a></li>
                    </ul>
                </nav>
            </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `
})

export class AuthenticationComponent{

}