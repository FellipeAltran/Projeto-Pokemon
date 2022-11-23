import { Pokemon } from './../pokemon/pokemon.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, take } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { PokemonType } from './../pokemon/pokemonType.modal';
import { Ability } from './ability.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  readyById(id: string): Observable<Pokemon> {
    const url = `${this.baseUrl}/pokemon/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      take(1)
    );
  }

  readyAbility(url: string): Observable<Ability> {
    return this.http.get<any>(url).pipe(
      map(obj => obj),
    )
  }

}
