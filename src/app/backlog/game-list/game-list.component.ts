import { Component, OnInit } from '@angular/core';
import { Game } from '../../Models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  
  games: Game[] = [
    // new Game('Final Fantasy 7',
    //   ['PC', 'Playstation1'],
    //   '1997-01-31',
    //   ['Adventure', 'RPG'],
    //   // tslint:disable-next-line: max-line-length
    //   'Final Fantasy VII is a Japanese role-playing game, a seventh installment in the series, excluding spin-offs. The main events take place in the world of Gaia, in the city of Midgar; the game combines standard fantasy elements with steampunk and other science fiction, providing the players with well-defined lore and locations. The main character, a mercenary named Cloud Strife, joins the cause of disrupting a megacorporation, which was destroying the planet with its excavations for energy. However, the storyline offers much more beyond that, allowing players to discover the secrets of Midgar, and eventually, save the world. Final Fantasy VII follows the trend set by previous games of the series, offering a grand world map to explore, with unique locations and lengthy battles. The combat system is a trademark for the genre and the series, where the player’s team and the enemies trade blow in a turn-based manner, employing different skills and items until either side is defeated. The game’s art style is innovative for a Final Fantasy, as it uses 3D models over 2D backgrounds, resulting in a unique and memorable art style.',
    //   'https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg',
    //   ['https://media.rawg.io/media/stories-640/d43/d43f9a50fa6a8c6d6fa2de881e26ac70.mp4']),
    //   new Game('Bubble Bobble (1986)',
    //   ['Atari', 'Playstation1'],
    //   '1986-01-01',
    //   ['NA'],
    //   // tslint:disable-next-line: max-line-length
    //   'Final Fantasy VII is a Japanese role-playing game, a seventh installment in the series, excluding spin-offs. The main events take place in the world of Gaia, in the city of Midgar; the game combines standard fantasy elements with steampunk and other science fiction, providing the players with well-defined lore and locations. The main character, a mercenary named Cloud Strife, joins the cause of disrupting a megacorporation, which was destroying the planet with its excavations for energy. However, the storyline offers much more beyond that, allowing players to discover the secrets of Midgar, and eventually, save the world. Final Fantasy VII follows the trend set by previous games of the series, offering a grand world map to explore, with unique locations and lengthy battles. The combat system is a trademark for the genre and the series, where the player’s team and the enemies trade blow in a turn-based manner, employing different skills and items until either side is defeated. The game’s art style is innovative for a Final Fantasy, as it uses 3D models over 2D backgrounds, resulting in a unique and memorable art style.',
    //   'https://media.rawg.io/media/screenshots/2a5/2a5404773ab69671bb6585cd46dd0a97.jpg',
    //   ['https://media.rawg.io/media/stories-640/d43/d43f9a50fa6a8c6d6fa2de881e26ac70.mp4'])
  ]

  constructor() { }

  ngOnInit() {
  }

}
