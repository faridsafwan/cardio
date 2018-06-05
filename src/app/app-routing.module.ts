import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardioComponent } from './pages/challenges/cardio/cardio.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NearbyComponent } from './pages/nearby/nearby.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/cardio', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cardio', component: CardioComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'nearby', component: NearbyComponent },
  { path: 'detail/:id', component: DetailsComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
