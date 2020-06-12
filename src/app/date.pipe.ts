import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'datePipe'
})
export class DatePipe implements PipeTransform {

  transform(value: Date ): any {
    moment.locale('pl');
    return moment(value).fromNow();

  }

}
