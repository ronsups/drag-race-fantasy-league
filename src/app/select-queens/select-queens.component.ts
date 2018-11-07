import { Component, OnInit } from '@angular/core';

import { Queen } from '../queen/queen';

import { mockQueens } from '../queen/queens.mock';

@Component({
  selector: 'select-queens',
  templateUrl: './select-queens.component.html',
  styleUrls: ['./select-queens.component.scss']
})
export class SelectQueensComponent implements OnInit {

  queens: Queen[] = mockQueens;

  constructor() { }

  ngOnInit() {
  }

}
