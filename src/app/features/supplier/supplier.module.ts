import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';


@NgModule({
  declarations: [
    SupplierListComponent,
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
