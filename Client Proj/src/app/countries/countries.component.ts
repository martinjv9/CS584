import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Country } from '../country';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-countries',
  imports: [RouterLink],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit{

  public countries: Country[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
      this.http.get<Country[]>(`${environment.baseUrl}api/Countries`).subscribe(
        {
          next: result => this.countries = result, 
          error: error => console.error(error)
        }
      );
    }
}
