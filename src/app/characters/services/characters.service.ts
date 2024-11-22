import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Character, CharactersResponse } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private _currentPage: number = 1;
  private _totalPages: number = 0;


  constructor(
    private http: HttpClient
  ) { }

  get currentPage(): number {
    return this._currentPage;
  }

  get totalPages(): number {
    return this._totalPages
  }


  public getCharacters(currentPage = 1): Observable<Character[]> {

    const url = `https://rickandmortyapi.com/api/character`

    const params = new HttpParams()
      .append("page", currentPage)

    this._currentPage = currentPage;

    return this.http.get<CharactersResponse>(url, { params })
      .pipe(
        map(resp => {

          this._totalPages = resp.info.pages

          return resp.results
        }),
        catchError(err => of([]))
      )
  }

}
