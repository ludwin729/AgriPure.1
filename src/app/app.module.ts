import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PlantsComponent } from './pages/plants/plants.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {MatCard, MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, PlantsComponent, CalendarComponent, PlotsComponent, ForecastComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
