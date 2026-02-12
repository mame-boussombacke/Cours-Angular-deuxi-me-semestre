import { Routes } from '@angular/router';
import { Dashboard } from './features/private/dashboard/dashboard';
import { DemandeRv } from  './features/private/demande-rv/demande-rv';
import { FormDemande } from './features/public/form-demande/form-demande';
import { ListDemande } from './features/private/list-demande/list-demande';
import { Patient } from './features/public/patient/patient';
import { Login } from './features/public/login/login';
import { Public } from './features/public/public';
import { Private } from './features/private/private';


export const routes: Routes = [
    //PRIVATE ROUTES
    {
    path: "private",
    component: Private,
    children: [
        {
        path: "dash",
        component: Dashboard
    },
    {
        path: "list-demande-rv",
        component: ListDemande
    },
    {
        path: "form-demande",
        component: FormDemande
    },
    {
        path: "drv",
        component: DemandeRv
    },

    ]
},
    
    
    
    //PUBLIC ROUTES
    {
    path: "public",
    component: Public,
    children: [
            {
        path: "login",
        component: Login
    },
    {
        path: "patients",
        component: Patient
    },
]
    

    },
    
        {path: "", redirectTo: "/public/login",pathMatch: "full"}

];

