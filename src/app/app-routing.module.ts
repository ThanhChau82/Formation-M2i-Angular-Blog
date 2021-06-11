import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { InsertComponent } from './insert/insert.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path : 'list', component : ListComponent},
  {path : 'insert', component : InsertComponent},
  {path : 'edit', component : EditComponent}, // à ajouter un paramètre plus tard pour id du post
  {path : '', redirectTo : 'list', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
