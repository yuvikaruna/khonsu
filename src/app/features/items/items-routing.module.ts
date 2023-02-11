import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListItemComponent } from './list-item/list-item.component';

const routes: Routes = [  {
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'list', component: ListItemComponent },
    { path: 'add', component: AddItemComponent },
    { path: 'edit/:id', component: AddItemComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
