import { Pokemon } from './../pokemon/pokemon.modal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from './feature.service';

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

  constructor(private route: Router, private router: ActivatedRoute, private feature: FeatureService) {
    const id = this.router.snapshot.paramMap.get('id');
    this.feature.readyById(id!).subscribe((pokemon) => {
      this.pokemon = pokemon
    })
  }

  ngOnInit(): void {
  }
}
