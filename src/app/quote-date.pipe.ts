import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteDate'
})
export class QuoteDatePipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); //today's date
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate()); //today's date with no time
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in milliseconds
    const dailySeconds = 86400; //Number of seconds in a day

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds/dailySeconds;

    if(dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }

}
