import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThoughtsComponent} from './thoughts/thoughts.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ThoughtsComponent
  },
  {
    path: '',
    component: ThoughtsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
