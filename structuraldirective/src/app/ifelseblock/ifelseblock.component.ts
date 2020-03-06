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
   flag1: boolean = false;
  flag2: boolean = false;
   flag3: boolean = false;
   flag4: boolean = false;

  str1: string = "";
  str2: string = "";
  str4: string = "";
  str3: string = "";
  show2() {
this.flag1=true;
    this.str1 = ` < tr >
      <div * ngIf="1;else elsevalue" >
        1
        < /div>
        < ng - template #elsevalue >
          condition false
            < /ng-template>
            </tr>`;
    return this.str1;
  }
  show3() {
this.flag2=true;
    this.str2 = `<tr>
        <div *ngIf="show; then thenBlock else elseblock"></div>
        <ng-template #thenBlock>kbc
            <div *ngIf="value; else elsevalue">this is show and value true</div>
            <ng-template #elsevalue>
                this is show true and value false
            </ng-template>
        </ng-template>
        <ng-template #elseblock>
            this is show false
        </ng-template>
    </tr>`;
    return this.str2;
  }
  show4() {
this.flag3=true;
    this.str3 = `<tr>

     < div * ngIf="value; else thisvale" > this is if statement < /div>
       < ng - template #thisvale > this is else block < /ng-template>
         </tr>`;
    return this.str3;

  }
  show5() {
this.flag4=true;
    return this.str4 = `<tr>
        <ng-container *ngIf="true;then thenblock else thisv">
        </ng-container>
        <ng-template #thenblock>this is true</ng-template>
        <ng-template #thisv> this is false block</ng-template>
     </tr>`;
    // return this.str4;
  }
  reset() {
    this.str1 = "";
    this.str2 = "";
    this.str3 = "";
    this.str4 = "";
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
