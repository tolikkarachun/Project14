import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterUserComponent } from './footer-user/footer-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    HomeComponent,
    AboutComponent,
    FooterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
