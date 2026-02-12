import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './patient.html',
  styleUrls: ['./patient.css'],
})
export class Patient {
  patients: { id: number; nom: string; age: number | null; tel: string }[] = [
    { id: 1, nom: 'Marie Dupont', age: 34, tel: '06 12 34 56 78' },
    { id: 2, nom: 'Ahmed Ben', age: 45, tel: '06 98 76 54 32' },
  ];

  search = '';

  get filteredPatients() {
    const q = (this.search || '').toString().toLowerCase().trim();
    if (!q) return this.patients;
    return this.patients.filter(p =>
      (p.nom || '').toLowerCase().includes(q) || (p.tel || '').includes(q)
    );
  }

  addPatient() {
    const id = this.patients.length ? Math.max(...this.patients.map(p => p.id)) + 1 : 1;
    this.patients = [...this.patients, { id, nom: 'Nouveau Patient', age: null, tel: '' }];
  }

  deletePatient(id: number) {
    this.patients = this.patients.filter(p => p.id !== id);
  }
}
