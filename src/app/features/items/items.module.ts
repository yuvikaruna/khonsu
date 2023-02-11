import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddItemComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
