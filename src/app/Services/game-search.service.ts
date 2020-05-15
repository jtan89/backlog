import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IGame } from '../Models/game.model';



@Injectable({
  providedIn: 'root'
})
export class GameSearchService {

  searchUrl: string = 'https://api.rawg.io/api/games?';
  detailsUrl: string = 'https://api.rawg.io/api/games/';

  gameSlug: string;

  prevPageUrl: string;
  nextPageUrl: string;

  gameDetails: IGame;



  constructor(private _http: HttpClient) { }

  // getSearchResults() {
  //   return this._http.get(this.apiUrl);
  // }

  getSearchResults(userQuery) {
    return this._http.get(this.searchUrl,
      {
        params: new HttpParams().set('search', userQuery)
      }
    )
      .pipe(map(data => {
        const resultsArray: any[] = [];
        // tslint:disable-next-line: forin
        for (const key in data) {
          if (key === 'next' && true) {
            this.nextPageUrl = data[key];
          }

          if (key === 'prev' && true) {
            this.prevPageUrl = data[key];
          }

          if (key === 'results' && true) {
            resultsArray.push(...data[key]);
          }
        }
        return resultsArray;
      })
      )
  }

  getGameDetails() {
    console.log(this.gameSlug);
    return this._http.get<IGame>(this.detailsUrl + this.gameSlug);
      // .subscribe((data: IGame) => {
      //   this.setGameDetails(data);
      //   console.log(data);
      // });
  }

  setGameDetails(game) {
    this.gameDetails = game;
  }

  transferGameDetails() {
    let details = this.gameDetails;
    this.clearData();
    return details;
  }

  clearData() {
    this.gameDetails = undefined;
  }
}
