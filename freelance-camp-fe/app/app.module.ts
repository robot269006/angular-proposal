import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';

@NgModule ({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
