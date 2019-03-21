import { Component } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    new Quote("You are the bomb","myself","Simon Gatheru"),
    new Quote("You are the bomb","myself","Simon Gatheru"),
    new Quote("You are the bomb","myself","Simon Gatheru"),
    new Quote("You are the bomb","myself","Simon Gatheru")
  ];

}
