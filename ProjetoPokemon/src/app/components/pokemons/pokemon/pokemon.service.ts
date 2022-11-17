import { Pokemon } from './pokemon.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    readyById(id: string): Observable<any> {
        const url = `${this.baseUrl}/pokemon/${id}`
        return this.http.get<any>(url).pipe(
            map(obj => obj),
        )
    }
}
