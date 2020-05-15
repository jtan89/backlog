import { Component, OnInit } from '@angular/core';
import { GameSearchService } from 'src/app/Services/game-search.service';
import { IGame } from '../Models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  isDataLoaded: boolean = false;
  gameDetails: IGame;
  jumbotronImage: any;
  //gameDetails: IGame = this.gameSearchService.transferGameDetails();

  constructor(private gameSearchService: GameSearchService) { }

  ngOnInit() {
    this.loadGameDetails();
  }

  loadGameDetails() {
    this.gameSearchService.getGameDetails()
      .subscribe((data: IGame) => {
        this.gameSearchService.setGameDetails(data);
        this.gameDetails = this.gameSearchService.transferGameDetails();
        this.isDataLoaded = true;
        console.log(this.gameDetails);
      });
  }
}

