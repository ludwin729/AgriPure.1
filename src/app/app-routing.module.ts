import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotsComponent } from './pages/plots/plots.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'plants',
  },
  {
    path: 'plants',
    component: PlantsComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'plots',
    component: PlotsComponent,
  },
  {
    path: 'forecast',
    component: ForecastComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
