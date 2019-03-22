import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "You are the bomb", "myself", "Simon Gatheru",0,0),
    new Quote(2, "You are the bombs", "himuselfu", "Simon Gatheru",0,0),
    new Quote(3, "You are the bombed", "thyself", "Simon Gatheru",0,0),
    new Quote(4, "You are the bomber", "themself", "Simon Gatheru",0,0)
  ];

  toaQuote(isDone, index) {
    if (isDone) {
      this.quotes.splice(index, 1);
    }
  }

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
