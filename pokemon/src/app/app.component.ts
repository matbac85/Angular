import { Component, OnInit } from '@angular/core';
//les lettres en capitales font référence à la liste des Pokemons.
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//OnInit nous permet d'instancier une méthode/ des propriétés lorsqu'on crée la classe component
export class AppComponent implements OnInit{
  title = 'pokemon';
//   pokemonList : Pokemon[] = POKEMONS;
//   pokemonSelected: Pokemon | undefined;
//   messageVisible: boolean = false;
  ngOnInit(){
//     console.table(this.pokemonList);
  }
//     selectPokemon(pokemon: any){
//       console.log(pokemon);
//     }

//     selectPokemonById(pokemonId: string){
//       const pokemon : Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonId)
//       this.pokemonSelected = pokemon;
//       if(pokemonId === ''){
//         this.messageVisible = false;
//       }else{
//         this.messageVisible = true;
//       }
    }
    // selectPokemon(event: MouseEvent){
    //méthode ci-dessous à ne pas utiliser parce que trop complexe inutilement.
    // const pokemon = (event.target as HTMLInputElement).innerText;
    // console.log(`Vous avez cliqué sur le Pokémon ${pokemon}`)
    // }
// }
