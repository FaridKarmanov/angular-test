import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { IPerson } from 'src/app/types';

@Component({
  selector: 'InformationTable',
  templateUrl: './InformationTable.component.html',
})
export class InformationTableComponent {
  data: IPerson[];
  type: string;

  constructor(
    private dataService: TestService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.type = Object.keys(data)[0];
    });

    this.data = dataService.filterData(this.type);
  }

  randomInteger() {
    let rand = 1 - 0.5 + Math.random() * (9999 - 1 + 1);
    return Math.round(rand);
  }
}
