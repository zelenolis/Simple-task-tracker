import { Pipe, PipeTransform } from '@angular/core';
import { SortTypes, Tasks } from '../interfaces/interfaces';

@Pipe({
  name: 'sorting',
  standalone: true
})

export class SortingPipe implements PipeTransform {

  transform(value: Tasks[] | null, type: SortTypes): Tasks[] {
    if (value === null) {
      return [];
    }

    const sortedValue = [...value];

    switch (type) {
      case SortTypes.deadline:
        return sortedValue.sort((a, b) => {
          const dateA = new Date(a.deadline);
          const dateB = new Date(b.deadline);
          return Number(dateA) - Number(dateB);
        });
      case SortTypes.status:
        return sortedValue.sort((a, b) => (a.status < b.status) ? 1 : ((b.status < a.status) ? -1 : 0));
      case SortTypes.executor:
        return sortedValue.sort((a, b) => (a.executor.toLocaleLowerCase() > b.executor.toLocaleLowerCase())
        ? 1 : ((b.executor.toLocaleLowerCase() > a.executor.toLocaleLowerCase()) ? -1 : 0))
      case SortTypes.default:
        return sortedValue;
    }
  }

}
