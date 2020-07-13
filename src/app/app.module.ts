import { from } from 'rxjs';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Router, RouterModule } from '@angular/router'

import { MaterialModule } from './core/material.module';
/* Modified and developed By Ayush Naik
   https://github.com/CyberWorrior
*/

import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestProjComponent } from './home/latest-proj/latest-proj.component';
import { SocialComponent } from './home/social/social.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { PosterComponent } from './home/poster/poster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './home/header/header.component';

import { LayoutModule } from '@angular/cdk/layout';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { SearchbarComponent } from './home/searchbar/searchbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

import { SignintoComponent } from './signinto/signinto.component';
import { ForgotComponent } from './forgot/forgot.component';
import { Article1Component } from './articles/article1/article1.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LatestProjComponent,
    SocialComponent,
    ViewMoreComponent,
    PosterComponent,
    HeaderComponent,
    SideBarComponent,
    SearchbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    LandingPageComponent,
    SignintoComponent,
    ForgotComponent,
    Article1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireDatabaseModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
