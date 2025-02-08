import { Component, OnInit } from "@angular/core";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NavBarComponent,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  

  title = 'angularapp02.client';
}
