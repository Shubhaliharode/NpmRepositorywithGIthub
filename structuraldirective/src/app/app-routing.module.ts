import { IfelseblockComponent } from './ifelseblock/ifelseblock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfblockComponent } from './ifblock/ifblock.component';
import { ForblockComponent } from './forblock/forblock.component';


const routes: Routes = [
  {path:'ifblock',component:IfblockComponent},
  { path: 'forblock', component: ForblockComponent},
  {path:'ifelseblock',component:IfelseblockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
