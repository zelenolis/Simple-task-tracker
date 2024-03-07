import { Injectable } from '@angular/core';
import { SortTypes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class SortingService {

  private type: SortTypes = SortTypes.default;

  setsortType(val: SortTypes) {
    this.type = val;
  }

  getsortType() {
    return this.type;
  }

}
