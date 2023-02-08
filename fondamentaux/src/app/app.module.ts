import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPremierComponentComponent } from './components/mon-premier-component/mon-premier-component.component';
import { AuthorsComponent } from './componantAuthors/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponentComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
