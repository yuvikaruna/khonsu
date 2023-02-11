import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor() { }
  getSupplierList(){
    return of(SUPPLIER_ELEMENT_DATA).pipe(delay(1000));
  }

  getItemsList(){
    return of(ITEMS_ELEMENT_DATA).pipe(delay(1000));
  }

}
const ITEMS_ELEMENT_DATA: any[] = [
  { item_id : 1, item_name: 'Hydrogen', type: 'gold', certification:'916', remarks:'' },
  { item_id : 2, item_name: 'Helium', type: 'gold', certification:'916', remarks:'' },
  { item_id : 3, item_name: 'Lithium', type: 'gold', certification:'916', remarks:'' },
  { item_id : 4, item_name: 'Beryllium', type: 'gold', certification:'916', remarks:'' },
  { item_id : 5, item_name: 'Boron', type: 'gold', certification:'916', remarks:'' },
  { item_id : 6, item_name: 'Carbon', type: 'gold', certification:'916', remarks:'' },
  { item_id : 7, item_name: 'Nitrogen', type: 'gold', certification:'916', remarks:'' },
  { item_id : 8, item_name: 'Oxygen', type: 'gold', certification:'916', remarks:'' },
  { item_id : 9, item_name: 'Fluorine', type: 'gold', certification:'916', remarks:'' },
  { item_id : 10, item_name: 'Neon', type: 'gold', certification:'916', remarks:'' },

]
const SUPPLIER_ELEMENT_DATA: any[] = [
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
