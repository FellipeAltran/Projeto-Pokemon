import { PokemonService } from './../pokemon/pokemon.service';
import { Pokemon } from './../pokemon/pokemon.modal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from './feature.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  pokemon!: Pokemon;

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

  constructor(private route: Router, private router: ActivatedRoute, private pokemonService: PokemonService, private http: HttpClient) {
    const id = this.router.snapshot.paramMap.get('id');
    this.pokemonService.readyById(id!.toString()).subscribe((pokemon) => {
    
      this.pokemon = pokemon;
      
      this.pokemon.abilities.map(e => {
        this.http.get<any>(e.ability.url).subscribe(param => {
          e.description = param.effect_entries.find((e: any) => e.language.name == 'en').effect;
        });
      });

    });
  }

  ngOnInit(): void {
    
  }
}
