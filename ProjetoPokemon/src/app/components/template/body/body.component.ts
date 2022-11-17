import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  pokemons: string[] = [
    'Água',
    'Fogo',
    'Grama',
    'Veneno',
    'Ar',
    'Eletricidade'
  ];

  cards = [1,2,3,4,5,6];
  
  constructor() { }

  ngOnInit(): void {
  }



}
