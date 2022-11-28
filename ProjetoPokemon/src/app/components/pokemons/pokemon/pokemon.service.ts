import { Pokemon } from './pokemon.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { PokemonType } from './pokemonType.modal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

    readyById(id: string): Observable<Pokemon> {
        const url = `${this.baseUrl}/pokemon/${id.toLowerCase()}`
        return this.http.get<any>(url).pipe(
            map(obj => obj),
        )
    }

    getAllbyType(nameType: string, limit: number = 6, offset: number = 0): Observable<PokemonType> {
        const url = `${this.baseUrl}/type/${nameType}/?limit=${limit}&offset=${offset}`
        return this.http.get<any>(url).pipe(map(obj => obj),
        )
    }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, '', {
            duration: 2000,
            horizontalPosition: "right",
            verticalPosition: "top"
        })
    }

    errorHandler(): Observable<any> {
        this.showMessage('Ocorreu um erro!', true)
        return EMPTY;
    }
}
