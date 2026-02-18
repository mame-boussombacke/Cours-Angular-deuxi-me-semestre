// Enum pour représenter les différents statuts d'une demande de rendez-vous
export enum SpecialiteModel {
    CARDIOLOGIE = 'Cardiologie',
    DERMATOLOGIE = 'Dermatologie',
    PEDIATRIE = 'Pédiatrie',
    ORTHOPEDIE = 'Orthopédie',
    GYNECOLOGIE = 'Gynécologie'
}



export enum StatusDemandeModel {
    EN_ATTENTE = 'En attente',
    ACCEPTER= 'Acceptée',
    REFUSER = 'Refusé'
}
// Interface pour représenter une demande de rendez-vous
export interface DemandeListRvModel {
    id: number;
    dateDemande: string;
    statut: StatusDemandeModel;
    heure: string;
    specialite: SpecialiteModel;
}