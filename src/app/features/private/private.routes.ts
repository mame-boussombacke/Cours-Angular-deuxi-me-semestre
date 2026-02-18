import { Routes } from '@angular/router';
import { Private } from './private';
import { Dashboard } from './dashboard/dashboard';
import { ListDemande } from './list-demande/list-demande';
import { DemandeRv } from './demande-rv/demande-rv';
import { FormDemande } from '../public/form-demande/form-demande';

export const PRIVATE_ROUTES: Routes = [
  {
    path: 'private',
    component: Private,
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      { path: 'dash', component: Dashboard },
      { path: 'list-demande-rv', component: ListDemande },
      { path: 'form-demande', component: FormDemande },
      { path: 'drv', component: DemandeRv },
    ],
  },
];
