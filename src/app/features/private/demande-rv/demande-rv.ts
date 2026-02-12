
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demande-rv',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demande-rv.html',
  styleUrls: ['./demande-rv.css'],
})
export class DemandeRv {
  model = { nom: '', tel: '', email: '', date: '', heure: '', motif: '' };

  submit() {
    console.log('Demande envoyée :', this.model);
    alert('Demande envoyée — nous vous contacterons bientôt.');
    this.model = { nom: '', tel: '', email: '', date: '', heure: '', motif: '' };
  }
}
