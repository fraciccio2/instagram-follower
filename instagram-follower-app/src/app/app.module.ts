import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFeatureModule } from 'login-feature';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    RouterOutlet,

    //COMPONENTI
    LoginFeatureModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
