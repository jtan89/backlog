import { Component, OnInit } from '@angular/core';
import { GameSearchService } from 'src/app/Services/game-search.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  searchValue: string;
  searchResults: any[] = [];
  noResults: boolean;

  prevPageUrl: string;
  nextPageUrl: string;

  isLoading: boolean = false;

  constructor(private gameSearchService: GameSearchService) { }

  ngOnInit() {

  }

  searchGame(value: string) {
    if (value !== '') {
      this.searchValue = value;
      this.getGameTitles(this.searchValue);
    } else {
      console.log('search empty');
    }
  }

  getGameTitles(searchValue) {

    this.isLoading = true;

    this.searchResults.length = 0;
    this.gameSearchService.getSearchResults(searchValue)
      .subscribe(results => {
        this.searchResults.push(...results);
        // placeholder to assign next/prev URL's to pass to service
        this.assignNextPrevUrl();
        //
        this.isLoading = false;
        console.log(this.searchResults);
        //  console.log(this.nextPageUrl);
        //  console.log(this.prevPageUrl);
      });
  }

  assignNextPrevUrl() {
    this.prevPageUrl = this.gameSearchService.prevPageUrl;
    this.nextPageUrl = this.gameSearchService.nextPageUrl;
  }
}



