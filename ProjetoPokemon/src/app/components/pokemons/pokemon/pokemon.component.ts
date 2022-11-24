import { EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.modal';
import { Router } from '@angular/router';

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

  selectedValue: string = "";

  name: string = "";

  pokemons: Array<Pokemon> = [];
  filterPokemons: Array<Pokemon> = [];

  img: string = '';

  mybreakpoint: number = 0;

  pokemon!: Pokemon;

  constructor(private service: PokemonService, private router: Router) {

  }

  ngOnInit(): void {
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : (window.innerWidth <= 800) ? 2 : 3;
    this.chamar();
  }
  handleSize(event: any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : (window.innerWidth <= 800) ? 2 : 3;
  }

  chamar() {
    for (let index = this.pokemons.length; index < this.pokemons.length + 6; index++) {
      this.service.readyById((index + 1).toString()).subscribe((pokemon) => {
        this.pokemons[index] = pokemon;
      })

    }
    this.filterPokemons = this.pokemons
  }

  filter() {
    if (!this.selectedValue) { this.chamar(); return; }
    this.filterPokemons = []
    this.service.getAllbyType(this.selectedValue).subscribe((response) => {
      const pokemonNames = response.pokemon.map((p) => p.pokemon.name);

      for (const pokename of pokemonNames) {
        this.service.readyById(pokename).subscribe((pokemon) => {
          this.filterPokemons.push(pokemon);
        })
      }
    })
  }

  verificador(event: any) {
    if (event.keyCode == 13) {
      if (this.name == '') {
        console.log('asdadas');
      } else {
        this.service.readyById(this.name).subscribe((p) => {
          this.pokemon = p;
          this.navigate(this.pokemon);
        },(error) => {
          console.log(error);
        })
      }
    }

  }

  navigate(param: Pokemon) {
    this.router.navigate([`feature/${param.id}`]);
  }
}
