import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  template: `
   <form class="form-inline">
  <div class="form-group">
    <div class="input-group">
      <input class="form-control" placeholder="yyyy-mm-dd"
             name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary calendar" (click)="d.toggle()" type="button"></button>
      </div>
    </div>
  </div>
</form>

<hr/>
<pre>Model: {{ model | json }}</pre>

<ngb-alert class="mt-3 mb-0" type="info" [dismissible]="false">
  You must provide the icon for the button. This allows you
  to choose an icon that matches your application's style.
  In this example, the icon is set via a CSS class.
</ngb-alert>
  `,
  styles: []
})
export class DatePickerComponent  {

 model;
  }
 
// @Component({
//   selector: 'ngbd-datepicker-popup',
//   templateUrl: './datepicker-popup.html'
// })
// export class NgbdDatepickerPopup {
//   model;
// }