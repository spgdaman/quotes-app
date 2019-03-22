export class Quote {
  public showQuoteDetails: boolean;
  constructor(public id: number, public quote: string, public author: string, public submittor: string) {
    this.showQuoteDetails = false;
  }
}
