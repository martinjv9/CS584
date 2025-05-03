import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../environments/environment.development';
import { CountryPopulation } from '../country-population';
import { HttpClient } from '@angular/common/http';
import { Country } from '../country';

@Component({
  selector: 'app-country-edit',
  imports: [
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.scss'
})
export class CountryEditComponent implements OnInit{
  form!: FormGroup;
  public country: Country | undefined;


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.populateData();

    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      iso2: new FormControl("", Validators.required),
      iso3: new FormControl("", Validators.required),
    });

  }
    
  populateData(){
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<Country>(`${environment.baseUrl}api/Countries/${id}`).subscribe(
      {
        next: result => {
          this.country = result;
          this.form.patchValue(this.country);
        }, 
        error: error => console.error(error)
      }
    );
  }

  onSubmit() {
    
  }
}
