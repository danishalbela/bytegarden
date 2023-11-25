import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShuffleHeroComponent } from './shuffle-hero/shuffle-hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ComponentNameComponent } from './component-name/component-name.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ShuffleHeroComponent,
    ServicesComponent,
    ContactUsComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

