import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRvModel, StatusDemandeModel,SpecialiteModel } from '../models/damande.model';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink],
  templateUrl: './list-demande.html',
  styleUrl: './list-demande.css',
})
export class ListDemande {
  public title: string = 'Mes Demandes de RV';
  demandes:DemandeListRvModel[] = [
    {id:1,dateDemande:'2024-06-01',statut:StatusDemandeModel.EN_ATTENTE,heure:'10:00',specialite:SpecialiteModel.CARDIOLOGIE},
    {id:2,dateDemande:'2024-06-02',statut:StatusDemandeModel.ACCEPTER,heure:'14:00',specialite:SpecialiteModel.DERMATOLOGIE},
    {id:3,dateDemande:'2024-06-03',statut:StatusDemandeModel.REFUSER,heure:'09:00',specialite:SpecialiteModel.PEDIATRIE},
  ];
  

}
