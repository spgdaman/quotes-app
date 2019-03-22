export class Quote {
  public showQuoteDetails: boolean;
  constructor(public quote: string, public author: string, public submittor: string) {
    this.showQuoteDetails = false;
  }
}
