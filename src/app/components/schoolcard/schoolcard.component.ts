import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolcard',
  templateUrl: './schoolcard.component.html',
  styleUrls: ['./schoolcard.component.scss']
})

export class SchoolcardComponent implements OnInit {

  @Input() name? : string;
  @Input() department? : string;
  @Input() phoneNumber? : number;

  constructor() { }

  ngOnInit(): void {

  }

}
