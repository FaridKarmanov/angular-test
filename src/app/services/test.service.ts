import { Injectable } from '@angular/core';
import { IPerson } from '../types';
import { test } from '../data';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}
  data: IPerson[] = test.data;

  filterData(value: string) {
    const result = this.data.filter((person) => person.type === value);
    return result;
  }
}
