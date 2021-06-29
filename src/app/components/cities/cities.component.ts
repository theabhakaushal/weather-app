import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { WeatherService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  
  selectedOptions:string[] = [];
 
  cities: {
    name: string;
    selected: boolean;
    }[] = [
    {
        name: 'Delhi',
        selected: false
    },
    {
        name: 'Agra',
        selected: false
    },
    {
        name: 'Pune',
        selected: false
    },
    {
      name: 'Mumbai',
      selected: false
  },
  {
    name: 'Amritsar',
    selected: false
  },
  {
    name: 'Chandigarh',
    selected: false
  },
  ];

  constructor(private weatherService :WeatherService, private router:Router , private notificationService:NotificationService ) { }

  ngOnInit(): void {
  
  }

 
  onAreaListControlChanged(list){
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);
}

  searchWeather(){

    this.weatherService.selectedCities = this.selectedOptions;
  if(this.selectedOptions.length !== 0)
      {
        this.weatherService.getWeatherForAll()
      .subscribe(data => {
        this.weatherService.citiesWeatherGrid = data; 
        this.router.navigate(['/cities-weather'])
      },
      (error) => {        
        console.log(error)                    
        this.notificationService.throwNotification("Some Error Occured. Please try again!!")
        
      });
       
      }
   else{
        this.notificationService.throwNotification("Please select a city !")
      

      
   }
  }

}
