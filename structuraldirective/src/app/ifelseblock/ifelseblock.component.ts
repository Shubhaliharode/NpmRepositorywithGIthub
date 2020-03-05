import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelseblock',
  templateUrl: './ifelseblock.component.html',
  styleUrls: ['./ifelseblock.component.css']
})
export class IfelseblockComponent implements OnInit {

  show: boolean = true;
  show1: boolean = true;
  value: boolean = false;
  condition: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
