import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { IndiceIndexComponent } from './components/indice-index/indice-index.component';
import { LoginSignupService } from './services/auth/login-signup.service';
import { TokenService } from './services/auth/token.service';
import { AuthService } from './services/auth/auth.service';
import { AfterLoginService } from './services/auth/after-login.service';
import { BeforeLoginService } from './services/auth/before-login.service';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BuscadorIndexComponent } from './components/buscador-index/buscador-index.component';
import { SugerenciaComponent } from './components/sugerencia/sugerencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    IndiceIndexComponent,
    SidebarComponent,
    BuscadorIndexComponent,
    SugerenciaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginSignupService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
