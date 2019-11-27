import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { IndiceIndexComponent } from './components/indice-index/indice-index.component';
import { BuscadorIndexComponent } from './components/buscador-index/buscador-index.component';
import { SugerenciaComponent } from './components/sugerencia/sugerencia.component';

import { AfterLoginService } from './services/auth/after-login.service';
import { BeforeLoginService } from './services/auth/before-login.service';

const appRoutes: Routes = [
  {path: 'login',component: LoginComponent,canActivate: [BeforeLoginService]},
  {path: 'signup',component: SignupComponent,canActivate: [BeforeLoginService]},
  {path: 'profile',component: ProfileComponent,canActivate: [AfterLoginService]},
  {path: 'request-password-reset',component: RequestResetComponent,canActivate: [BeforeLoginService]},
  {path: 'response-password-reset',component: ResponseResetComponent,canActivate: [BeforeLoginService]},
  {path: 'indice', component: IndiceIndexComponent },
  {path: 'buscador', component: BuscadorIndexComponent },
  {path: 'sugerencia', component: SugerenciaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }

