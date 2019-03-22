import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "The Way Get Started Is To Quit Talking And Begin Doing.", "Walt Disney", "Simon Gatheru",0,0),
    new Quote(2, "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "Winston Churchill", "Simon Gatheru",0,0),
    new Quote(3, "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "Rob Siltanen", "Simon Gatheru",0,0),
    new Quote(4, "Whether You Think You Can Or Think You Can’t, You’re Right.", "Henry Ford", "Simon Gatheru",0,0)
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
