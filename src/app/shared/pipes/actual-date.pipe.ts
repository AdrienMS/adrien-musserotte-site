import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

/**
 * @Pipe
 *
 * @description Pipe to check if the given date is null or undefined.
 * If it's true, the date will be transform to the string 'Actuel'.
 * If it's false, the date will be formated by the given format or the default format.
 */
@Pipe({
  name: 'actualDate'
})
export class ActualDatePipe extends DatePipe implements PipeTransform {

  /**
   * ```html
   *  <example>{{date | actualDate:"format"}}</example>
   * ```
   * @param value The value to transform
   * @param format The format that transform the value
   */
  transform(
    value: string | Date,
    format: string = 'shortDate'
    ): string {
      if (value === null || value === undefined) {
        return 'Actuel';
      }
      return super.transform(value, format);
  }

}
