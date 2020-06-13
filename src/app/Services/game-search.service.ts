import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IGame } from '../Models/game.model';
import { IScreenshots } from '../Models/screenshots.model';

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
  gameScreenshots: IScreenshots;

  constructor(private _http: HttpClient) {}


  // Retrieves the user's search result and returns them into an array.
  getSearchResults(userQuery) {
    return this._http.get(this.searchUrl,
      {
        params: new HttpParams().set('search', userQuery)
      }
    )
  // Passes the desired data from the http call into an array.
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
    );
  }

  getGameDetails() {
    return this._http.get<IGame>(this.detailsUrl + this.gameSlug);
  }

  getGameScreenshots() {
    return this._http.get<IScreenshots>(this.detailsUrl + this.gameSlug + '/screenshots')
      .pipe(map(data => {
        const screenshotArray: IScreenshots[] = [];
        for (const key in data) {
          if (key === 'results' && true) {
            screenshotArray.push(...data[key]);
          }
        }
        return screenshotArray;
      }));
  }

  setGameDetails(game) {
    this.gameDetails = game;
  }


  transferGameDetails() {
    const details = this.gameDetails;
    this.clearData();
    return details;
  }

  clearData() {
    this.gameDetails = undefined;
  }
}
