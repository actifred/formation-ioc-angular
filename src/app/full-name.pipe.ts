import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './models/person';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: Person): string {
    return user.name.title + ' ' + user.name.first + ' ' + user.name.last.toUpperCase();
  }

}
