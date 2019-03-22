import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("You are the bomb", "myself", "Simon Gatheru"),
    new Quote("You are the bombs", "himuselfu", "Simon Gatheru"),
    new Quote("You are the bombed", "thyself", "Simon Gatheru"),
    new Quote("You are the bomber", "themself", "Simon Gatheru")
  ];

  addNewQuote(quote) {
    this.quotes.push(quote);
  }

  toggleQuote(index) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
