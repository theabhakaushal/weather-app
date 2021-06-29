import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { forkJoin} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  

  constructor(private http:HttpClient) { 

  }

  public selectedCities : string[] = [];
  public citiesWeatherGrid=[];

  getWeatherForAll()  {
    let observableBatch = [];
    this.selectedCities.forEach(( city ) => {
      observableBatch.push( this.http.get(environment.weatherAPI.replace('$city',city).replace('$API_KEY',environment.API_KEY)));
    });
  
   return forkJoin(observableBatch)
  }

}
