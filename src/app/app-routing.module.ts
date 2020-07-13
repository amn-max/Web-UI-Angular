
import { Article1Component } from './articles/article1/article1.component';


import { ForgotComponent } from './forgot/forgot.component';
import { SignintoComponent } from './signinto/signinto.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './about/about.component';
import { LatestProjComponent } from './home/latest-proj/latest-proj.component';
/* Modified and developed By Ayush Naik
   https://github.com/CyberWorrior
*/

import { SideBarComponent } from './home/side-bar/side-bar.component';
import { SocialComponent } from './home/social/social.component';
import { SearchbarComponent } from './home/searchbar/searchbar.component';
import { PosterComponent } from './home/poster/poster.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'signin',component:LandingPageComponent},
  {path:'signin/signinasuser',component:SignintoComponent},
  {path:'signin/password_id',component:ForgotComponent},
  {path:'articles/article1',component:Article1Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
