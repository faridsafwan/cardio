import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { CardioComponent, CardioPipe } from './pages/challenges/cardio/cardio.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NearbyComponent } from './pages/nearby/nearby.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { CardioService } from './services/cardio.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardioComponent,
    DashboardComponent,
    NearbyComponent,
    TimelineComponent,
    DetailsComponent,
    SearchComponent,
    SliderComponent,
    CardioPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CardioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
