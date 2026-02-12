
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  model = { email: '', password: '', remember: false };

  login() {
    console.log('Tentative de connexion', this.model);
    // placeholder: remplacer par appel API
    alert('Connexion simulée — implementer l\'authentification réelle.');
  }
}
