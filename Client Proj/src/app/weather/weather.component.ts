import { Component } from '@angular/core';
import { WeatherForecast } from '../weather-forecast';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>(`${environment.baseUrl}weatherforecast`).subscribe(
      {
        next: result => this.forecasts = result, 
        error: error => console.error(error)
      }
    );
  }
}
