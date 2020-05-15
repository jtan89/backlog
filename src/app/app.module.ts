import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BacklogComponent } from './backlog/backlog.component';
import { GameListComponent } from './backlog/game-list/game-list.component';
import { GameItemComponent } from './backlog/game-list/game-item/game-item.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameSearchService } from './Services/game-search.service';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: GameSearchComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'details', component: GameDetailsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BacklogComponent,
    GameListComponent,
    GameItemComponent,
    GameSearchComponent,
    GameDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GameSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
