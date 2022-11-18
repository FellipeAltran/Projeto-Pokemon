import { Pokemon } from './pokemon.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { PokemonType } from './pokemonType.modal';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    readyById(id: string): Observable<Pokemon> {
        const url = `${this.baseUrl}/pokemon/${id}`
        return this.http.get<any>(url).pipe(
            map(obj => obj),
        )
    }

    getAllbyType(nameType: string, limit: number = 6, offset: number = 0): Observable<PokemonType> {
        const url = `${this.baseUrl}/type/${nameType}/?limit=${limit}&offset=${offset}`
        return this.http.get<any>(url).pipe(map(obj => obj),
        )
    }
}
