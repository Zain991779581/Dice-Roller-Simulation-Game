import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  name = 'Zain Malik';
  today = new Date();
}
