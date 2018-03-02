import{Routes} from "@angular/router";
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";

// use existed routed model
export const AUTH_ROUTES: Routes=[
     {path:"",redirectTo:'signup',pathMatch:'full'},  //empty path should be in auth so no slash
    {path:"signup",component:SignupComponent},
    {path:"signin",component:SigninComponent},
    {path:"logout",component:LogoutComponent}
 ];
