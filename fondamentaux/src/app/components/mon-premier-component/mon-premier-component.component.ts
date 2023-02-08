import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';

@Component({
  //fonctionne comme un selecteur css ->
  selector: '.premierComposant',
  //chemin vers le fichier html lié à ma classe ->
  templateUrl: './mon-premier-component.component.html',
  //On peut aussi écrire l'HTML directement dans le composant si on remplace templateUrl par template (simpement)
  //Mais c'est déconseillé (/!\)
  //template:
  //  <div>
  //    J'existe, je vous promets
  //  </div>
  styleUrls: ['./mon-premier-component.component.css']
  /*Il existe, comme pour l'HTML, la possibilité de travailler directement le CSS ici via la propriété/clé 'styles',
  mais ce n'est pas conseillé non plus. 
    styles: [`
      .red {
        background-color : red;
      }
    `]
  */
})
export class MonPremierComponentComponent {
  //on va utiliser cette propriété et l'afficher dans notre HTML. On retourne dans le fichier HTML et on note : {{criDeVictoire}}
  criDeVictoire = 'Hourra!'
  declare movies: Movie[]
  // équivaut à this.moviesService = moviesService
  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getAllMovies();
  } 


  //retourne banane, une chaîne de caractère
  getBanane(){
    return 'banane';
  }
}
