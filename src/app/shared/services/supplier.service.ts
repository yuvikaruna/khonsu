import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor() { }
  getSupplierList(){
    return of(ELEMENT_DATA).pipe(delay(1000));
  }

}
const ELEMENT_DATA: any[] = [
  { position: 1, supplier_id : 1, supplier_name: 'Hydrogen', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Hydrogen' },
  { position: 2, supplier_id : 2, supplier_name: 'Helium', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Helium' },
  { position: 3, supplier_id : 3, supplier_name: 'Lithium', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Lithium' },
  { position: 4, supplier_id : 4, supplier_name: 'Beryllium', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Beryllium' },
  { position: 5, supplier_id : 5, supplier_name: 'Boron', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Boron' },
  { position: 6, supplier_id : 6, supplier_name: 'Carbon', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Carbon' },
  { position: 7, supplier_id : 7, supplier_name: 'Nitrogen', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Nitrogen' },
  { position: 8, supplier_id : 8, supplier_name: 'Oxygen', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Oxygen' },
  { position: 9, supplier_id : 9, supplier_name: 'Fluorine', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Fluorine' },
  { position: 10, supplier_id : 10, supplier_name: 'Neon', phone:1234567890, email: 'test@test.com', gst:"27AAPFU0939F1ZV",status:'active',shop_name : 'Shop Neon' },
];
