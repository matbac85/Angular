import { Injectable } from '@angular/core';

export interface Movie{
  title: string;
  description: string;
}

//Injectable est un décorateur qui rend l'instance de ma classe connue par Angular. 
//Permet de diffuser cette instance (à la demande) pour qu'angular la distribue à nos différents composants.
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAllMovies(): Movie[] {
    return [
      {
        title: 'Piège de cristal',
        description: 'Film de bruises avec Bruce'
      },
      {
        title: 'Jurassic Park',
        description: 'Film avec de vieux spécimens qui font GRRRR'
      },
      {
        title: 'Retour vers le futur',
        description: `Ce serait vraiment cool si c'était vrai`
      },
    ];
  }
}
