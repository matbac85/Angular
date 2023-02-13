import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})

//un service est un fichier ts (similaire à la directive, mais disponible partout dans notre application.)
export default class DetailPokemonComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router){}
  declare pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  ngOnInit(){
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    // j'utilise le router, snapshot me permet d'accéder à la donnée à l'instant T de mon URL. 
    // paramMap me permet de mapper (d'itérer) sur chacun des paramètres de mon URL.
    if(pokemonId){
      this.pokemon = this.pokemonList.find(monster => monster.id == +pokemonId)
    }
  }
}
