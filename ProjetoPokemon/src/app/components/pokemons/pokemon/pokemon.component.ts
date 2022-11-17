import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.modal';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],

})
export class PokemonComponent implements OnInit {

  tipos: string[] = [
    'Água',
    'Fogo',
    'Grama',
    'Veneno',
    'Ar',
    'Eletricidade'
  ];


  pokemons: Array<Pokemon> = [];
  img: string = ''

  constructor(private service: PokemonService) {
    console.log('asda')
  }

  ngOnInit(): void {
    this.chamar()
  }

  chamar(){
    for (let index = this.pokemons.length; index < this.pokemons.length + 6; index++) {
      this.service.readyById((index + 1).toString()).subscribe((pokemon) => {
        this.pokemons[index] = pokemon;

        console.log(this.pokemons)
      })
      
    }
  }
}
