import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forblock',
  templateUrl: './forblock.component.html',
  styleUrls: ['./forblock.component.css']
})
export class ForblockComponent implements OnInit {
  students = [
    { name: "shubhali", edu: ["BE", "M.tech"] },
    { name: "Vaibhavi", edu: ["BA", "MA", "PG"] }
    ];
  names=["shubhu","kbs","vaibhavi","kajal","dipali","rekha"];
  constructor() { }

  ngOnInit(): void {
  }

}
