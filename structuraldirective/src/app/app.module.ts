import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfblockComponent } from './ifblock/ifblock.component';
import { ForblockComponent } from './forblock/forblock.component';
import { IfelseblockComponent } from './ifelseblock/ifelseblock.component';

@NgModule({
  declarations: [
    AppComponent,
    IfblockComponent,
    ForblockComponent,
    IfelseblockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
