import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.modal';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],

})
export class PokemonComponent implements OnInit {

  tipos: string[] = [
    'water',
    'fire',
    'grass',
    'flying',
    'poison',
    'normal',
    'electric',
    'bug',
    'ice',
    'fighting',
    'ground',
    'psychic',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy'
  ];

  selectedValue: string = ""


  pokemons: Array<Pokemon> = [];
  filterPokemons: Array<Pokemon> = [];

  img: string = ''

  constructor(private service: PokemonService) {
  }

  ngOnInit(): void {
    this.chamar()
  }

  chamar() {
    for (let index = this.pokemons.length; index < this.pokemons.length + 6; index++) {
      this.service.readyById((index + 1).toString()).subscribe((pokemon) => {
        this.pokemons[index] = pokemon;
      })

    }
  }

  filter() {
    this.filterPokemons = []
    this.service.getAllbyType(this.selectedValue).subscribe((response) => {
      console.log(response)
      const pokemonNames = response.pokemon.map((p) => p.pokemon.name);

      for (const pokename of pokemonNames) {
        this.service.readyById(pokename).subscribe((pokemon) => {
          this.filterPokemons.push(pokemon);
        })
      }
    })
  }
}
