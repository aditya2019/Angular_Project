import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule,router } from '@angular/router';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NowPlayComponent } from './now-play/now-play.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NowPlayComponent,
    PopularComponent,
    TopRatedComponent,
    UpcomingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
