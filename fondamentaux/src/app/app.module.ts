import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPremierComponentComponent } from './components/mon-premier-component/mon-premier-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
