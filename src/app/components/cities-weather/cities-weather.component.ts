import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { WeatherService } from 'src/app/services/weather-service.service';



@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.css']
})
export class CitiesWeatherComponent implements OnInit {

  citiesWeatherGridData = [];
  filteredCitiesWeatherGrid = [];
  hasData=true;

  constructor(private weatherService :WeatherService, private router:Router,private notificationService : NotificationService) { }

  ngOnInit(): void {
    if(this.weatherService.selectedCities.length !== 0)
    {
      this.getCitiesWeather()
    }
    else{
      this.router.navigate(['/'])
    }
   
  }

  getCitiesWeather(){
    this.citiesWeatherGridData=this.weatherService.citiesWeatherGrid;
    this.filteredCitiesWeatherGrid = this.citiesWeatherGridData;
  }

  filterResult(searchText){
    console.log(searchText);
    this.filteredCitiesWeatherGrid  = this.citiesWeatherGridData.filter(cityWeather => {
      let cityName = cityWeather.name.toLowerCase();
      if(cityName.includes(searchText.toLowerCase()))
      {
        return cityWeather;
      }
    } );

    if(this.filteredCitiesWeatherGrid.length !== 0){
      this.hasData=true;
    }  
    else{
      this.hasData=false;
    }
}

}
