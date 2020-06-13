import { Component, OnInit } from '@angular/core';
import { GameSearchService } from 'src/app/Services/game-search.service';
import { IGame } from '../Models/game.model';

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

  // Seaches the game based on user input.
  searchGame(value: string) {
    if (value !== '') {
      this.searchValue = value;
      this.getGameTitles(this.searchValue);
    } else {
      console.log('search empty');
    }
  }

  // Calls the game search service to make API call and stores results into an array.
  getGameTitles(searchValue) {
    this.isLoading = true;
    this.searchResults.length = 0;
    this.gameSearchService.getSearchResults(searchValue)
      .subscribe(results => {
        this.searchResults.push(...results);
        // placeholder to assign next/prev URL's to pass to service
        this.assignNextPrevUrl();
        this.isLoading = false;
      });
  }

  // Assigns the selected game's slug to the service slug to setup the details API call.
  assignGameSlug(slug) {
    this.gameSearchService.gameSlug = slug;
  }

  // Assigns the next and prevous URL's.
  assignNextPrevUrl() {
    this.prevPageUrl = this.gameSearchService.prevPageUrl;
    this.nextPageUrl = this.gameSearchService.nextPageUrl;
  }
}



