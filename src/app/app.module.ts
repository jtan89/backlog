import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BacklogComponent } from './backlog/backlog.component';
import { GameListComponent } from './backlog/game-list/game-list.component';
import { GameItemComponent } from './backlog/game-list/game-item/game-item.component';
import { GameSearchComponent } from './backlog/game-search/game-search.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameSearchService } from './Services/game-search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BacklogComponent,
    GameListComponent,
    GameItemComponent,
    GameSearchComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
