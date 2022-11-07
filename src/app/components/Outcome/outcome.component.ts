import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { IPerson } from 'src/app/types';

@Component({
  selector: 'outcome',
  templateUrl: './outcome.component.html',
})
export class OutcomeComponent {
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
}
