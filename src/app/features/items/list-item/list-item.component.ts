import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { NGXLogger } from "ngx-logger";
import { Title } from "@angular/platform-browser";
import { NotificationService } from "src/app/core/services/notification.service";
import { Router } from "@angular/router";
import { SupplierService } from "src/app/shared/services/supplier.service";

export interface ItemsList {
  item_id: Number;
  item_name: string;
  type: string;
  certification: string;
  remarks: string;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  displayedColumns: string[] = [
    "item_id",
    "item_name",
    "type",
    "certification",
    "remarks",
    "actions",
  ];

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();
  dataSource: MatTableDataSource<ItemsList>;
  PAGE_TYPE : string = "Items List";

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private supplierService: SupplierService,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit() {
    this.getItemsList();
    this.titleService.setTitle("Khonsu - " + this.PAGE_TYPE);
    this.logger.log("Customers loaded");
    this.notificationService.openSnackBar("Customers loaded");
  }
  
  getItemsList() {
    this.supplierService.getItemsList().subscribe((data: ItemsList[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  editSupplier(items: ItemsList) {
    this.router.navigate(["items/edit/" + items.item_id],{state: {items: items}});

  }

  deleteSupplier(items: ItemsList) {
    console.log(items);
  }
}
