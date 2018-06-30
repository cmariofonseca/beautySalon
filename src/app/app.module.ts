import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StylistsComponent } from './components/stylists/stylists.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricesComponent } from './components/prices/prices.component';
import { OpeningComponent } from './components/opening/opening.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    GalleryComponent,
    StylistsComponent,
    ContactComponent,
    PricesComponent,
    OpeningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
