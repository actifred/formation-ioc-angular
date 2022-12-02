import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './core/user.service';
import { FormsModule } from '@angular/forms';
import { countryList } from './models/countries';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { SplashComponent } from './splash/splash.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { SharedModule } from './shared/shared.module';
import { DirtyGuard } from './dirty.guard';
import { UserGuard } from './user.guard';
import { UserResolver } from './user.resolver';
import { LoginFormComponent } from './login-form/login-form.component';

export const countryListToken = new InjectionToken("countryList");

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SplashComponent,
    UserMainComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ 
    UserService,
    { 
      provide: countryListToken,
      useValue: countryList
    },
    UserGuard,
    DirtyGuard,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
