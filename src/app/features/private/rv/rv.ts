
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rv',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './rv.html',
  styleUrls: ['./rv.css'],
})
export class Rv {
  from?: string;
  to?: string;
  rvs = [
    { date: '2026-02-12', heure: '09:30', patient: 'Marie Dupont', motif: 'Consultation générale', statut: 'Confirmé' },
    { date: '2026-02-15', heure: '14:00', patient: 'Ahmed Ben', motif: 'Suivi', statut: 'En attente' },
  ];

  get filteredRvs() {
    if (!this.from && !this.to) return this.rvs;
    const from = this.from ? new Date(this.from) : null;
    const to = this.to ? new Date(this.to) : null;
    return this.rvs.filter(r => {
      const d = new Date(r.date);
      if (from && d < from) return false;
      if (to && d > to) return false;
      return true;
    });
  }
}
