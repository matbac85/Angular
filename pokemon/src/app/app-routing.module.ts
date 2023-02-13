import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import DetailPokemonComponent from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  // les deux points sont là pour signifier que l'id est une info que je reçois, qu'on lui fournit.
  {path: 'pokemons/:id', component: DetailPokemonComponent},
  //si on entre n'importe quoi dans l'URL, il nous redirigera vers pokemons
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
