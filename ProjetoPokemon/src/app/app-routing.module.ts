import { FeaturesComponent } from './components/pokemons/features/features.component';
import { PokemonComponent } from './components/pokemons/pokemon/pokemon.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: PokemonComponent
  },
  {
    path: "feature/:id",
    component: FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
