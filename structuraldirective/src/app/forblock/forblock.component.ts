import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forblock',
  templateUrl: './forblock.component.html',
  styleUrls: ['./forblock.component.css']
})
export class ForblockComponent implements OnInit {
  students = [
    { name: "Shubhali", address: "Nagpur", edu: ["BE", "M.tech"] },
    { name: "Nikita", address: "Nagpur", edu: ["BCCA", "MCM"] },
    { name: "Kalyani", address: "Nagpur", edu: ["BE", "PGDM"] },
    { name: "Vaibhavi", address: "Pune", edu: ["BA", "MA", "PG"] }
  ];
  names = [
    { id: 102, product: "screen 4", stock: 0 },
    { id: 202, product: "screen 4.5", stock: 786 },
    { id: 302, product: "screen 5", stock: 0 },
    { id: 402, product: "screen 5.5", stock: 206 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
