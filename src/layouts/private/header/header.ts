
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-private',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

}
