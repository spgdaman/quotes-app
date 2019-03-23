export class Quote {
  public showQuoteDetails: boolean;
  constructor(public id: number, public quote: string, public author: string,
    public submittor: string, public upvote: number, public downvote: number,
    public quoteDate: Date) {
    this.showQuoteDetails = false;
  }
}
