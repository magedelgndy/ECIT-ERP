import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoListComponent } from './demo/demo-list/demo-list.component';
import { DemoFormComponent } from './demo/demo-form/demo-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'demo-list', pathMatch: 'full'},
  {path:'demo-list' , component: DemoListComponent},
  {path:'demo-form' , component: DemoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
