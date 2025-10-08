import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { History } from '../history';

@Component({
  selector: 'app-game-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './game-page.html',
  styleUrls: ['./game-page.css']
})
export class GamePage {
  userAnswer: number = 1;
  clue: string = "";
  numberToGuess: number = Math.floor(Math.random() * 10) + 1;

  checkAnswer() { //checking the answer the user inputted
    if (this.userAnswer < 1 || this.userAnswer > 10) {
      this.clue = "Enter a number between 1 and 10.";
      return;
    }

    if (this.userAnswer === this.numberToGuess) { //if statement depending on answer
      this.clue = "Correct! The number was " + this.numberToGuess;
      History.add(this.userAnswer, "guessed");
    } else if (this.userAnswer < this.numberToGuess) {
      this.clue = "The number is larger.";
      History.add(this.userAnswer, "not guessed");
    } else {
      this.clue = "The number is smaller.";
      History.add(this.userAnswer, "not guessed");
    }
  }
}
