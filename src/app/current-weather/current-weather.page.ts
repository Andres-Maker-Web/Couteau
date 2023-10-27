import { Component, OnInit } from '@angular/core';
import { CurrentWeatherServiceService } from './current-weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.page.html',
  styleUrls: ['./current-weather.page.scss'],
})
export class CurrentWeatherPage implements OnInit {
  city= "Santo Domingo";
  weatherData: any;

  constructor(private curWeatherService: CurrentWeatherServiceService) { }
  weatherbit()
  {
    this.curWeatherService.getCurrentWeather(this.city).subscribe((data)=> {
      this.weatherData= data.data[0];
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
