import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameSearchService {

  apiUrl: string = 'https://api.rawg.io/api/games?';

  searchString: string = 'final fantasy';

  prevPageUrl: string;
  nextPageUrl: string;

  constructor(private _http: HttpClient) { }

  // getSearchResults() {
  //   return this._http.get(this.apiUrl);
  // }

  getSearchResults(userQuery) {
    return this._http.get(this.apiUrl,
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
}
