import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NowPlayComponent} from './now-play/now-play.component';
import {PopularComponent} from './popular/popular.component';
import {TopRatedComponent} from './top-rated/top-rated.component';
import {UpcomingComponent} from './upcoming/upcoming.component';
const routes: Routes = [
  { path: '', redirectTo: '/nowplay', pathMatch: 'full' },
  { path: 'nowplay', component: NowPlayComponent},
  { path: 'popular', component: PopularComponent},
  { path: 'toprated', component:TopRatedComponent},
  { path: 'upcoming', component: UpcomingComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
