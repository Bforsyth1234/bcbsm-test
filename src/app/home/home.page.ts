import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { add, format, sub } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dateSubmitted = false;
  public futureDateForm = new FormGroup({
    futureDate: new FormControl(''),
  });
  public minDate = format(
    add(new Date(), {
      days: 1,
    }),
    'yyyy-MM-dd'
  );
  public maxDate = format(
    add(new Date(), {
      years: 5,
    }),
    'yyyy-MM-dd'
  );
  public today = format(new Date(), 'yyyy-MM-dd');
  public yesterday = format(sub(
    new Date(), {
      days: 1
    }
  ), 'yyyy-MM-dd');
  public tenYearsPassedSelected: string;;
  public oneYearPassedSelected: string;

  constructor() {}

  onSubmit(event: Event) {
    this.dateSubmitted = true;
    const selectedDate = new Date(event.target[0].value);

    this.tenYearsPassedSelected = format(add(selectedDate, {
      years: 10
    }), 'yyyy-MM-dd');
    this.oneYearPassedSelected = format(add(selectedDate, {
      years: 1
    }), 'yyyy-MM-dd');
  }
}
