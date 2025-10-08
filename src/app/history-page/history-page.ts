import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { History } from '../history';

@Component({
  selector: 'app-history-page',
  imports: [RouterLink],
  templateUrl: './history-page.html',
  styleUrls: ['./history-page.css']
})
export class HistoryPage {
  historyTable: string = "";

  constructor() {
    this.buildTable();
  }

  buildTable() {
    this.historyTable = "<table class='history-table'><tr><th>Number</th><th>Result</th></tr>";
    for (let i = 0; i < History.getAll().length; i++) {
      const entry = History.getAll()[i];
      this.historyTable += "<tr><td>" + entry.number + "</td><td>" + entry.result + "</td></tr>";
    }
    this.historyTable += "</table>";
  }


  clearHistory() {
    History.clear();
    this.buildTable();
  }
}
