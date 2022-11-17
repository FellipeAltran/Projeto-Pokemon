import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.modal';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: string[] = [
    'Água',
    'Fogo',
    'Grama',
    'Veneno',
    'Ar',
    'Eletricidade'
  ];

  cards = [1, 2, 3, 4, 5, 6];

  pokemon: Array<Pokemon> = [];
  img: string = ''

  constructor(private service: PokemonService) {
    console.log('asda')
  }

  ngOnInit(): void {
    this.chamar()
  }

  chamar(){
    this.cards.forEach((value, index) => {
      this.service.readyById(value.toString()).subscribe((value) => {
        this.pokemon.push(value)
        this.cards[index] = index + 6;
      })
    })
  }

}
