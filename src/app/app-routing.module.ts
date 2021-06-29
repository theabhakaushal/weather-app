import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// component
import { CitiesWeatherComponent } from './components/cities-weather/cities-weather.component';
import { CitiesComponent } from './components/cities/cities.component';

const routes: Routes = [
  
  {
    path: "",
    component: CitiesComponent,
  },
  {
    path: "cities-weather",
    component: CitiesWeatherComponent,
  },
    
  {
    path: "**",
    component: CitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
