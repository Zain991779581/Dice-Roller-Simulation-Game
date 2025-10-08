import { Routes } from '@angular/router';
import {GamePage} from './game-page/game-page';
import {HistoryPage} from './history-page/history-page';

export const routes: Routes = [
  {path: 'game', component: GamePage},
  {path: 'history', component: HistoryPage},
  {path: '', redirectTo: 'game', pathMatch: 'full'},
  {path: '**', redirectTo: 'game'
  }
];
