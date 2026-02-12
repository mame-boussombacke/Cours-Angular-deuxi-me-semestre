import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../layouts/private/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ges-rv';
}
