import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifblock',
  templateUrl: './ifblock.component.html',
  styleUrls: ['./ifblock.component.css']
})
export class IfblockComponent implements OnInit {
  show: boolean = true;
  show1: boolean = true;
  value: boolean = false;
  condition: boolean = true;
  name="shubhali";
  constructor() { }

  ngOnInit(): void {
  }

}
