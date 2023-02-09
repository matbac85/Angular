import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
import { FavouriteComponent } from './components/favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingDemoComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
