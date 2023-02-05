import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { NGXLogger } from "ngx-logger";
import { Title } from "@angular/platform-browser";
import { NotificationService } from "src/app/core/services/notification.service";
import { Router } from "@angular/router";
import { SupplierService } from "src/app/shared/services/supplier.service";

export interface SupplierList {
  supplier_id: Number;
  supplier_name: string;
  position: number;
  phone: number;
  email: string;
  gst: string;
  status: string;
  shop_name: string;
}

@Component({
  selector: "app-supplier-list",
  templateUrl: "./supplier-list.component.html",
  styleUrls: ["./supplier-list.component.scss"],
})
export class SupplierListComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "supplier_name",
    "phone",
    "email",
    "shop_name",
    "gst",
    "status",
    "actions",
  ];

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();
  dataSource: MatTableDataSource<SupplierList>;

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private supplierService: SupplierService,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSupplierList();
    this.titleService.setTitle("Khonsu - Customers");
    this.logger.log("Customers loaded");
    this.notificationService.openSnackBar("Customers loaded");
  }
  
  getSupplierList() {
    this.supplierService.getSupplierList().subscribe((data: SupplierList[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  editSupplier(supplier: SupplierList) {
    this.router.navigate(["supplier/edit/" + supplier.supplier_id],{state: {supplier: supplier}});

  }

  deleteSupplier(supplier: SupplierList) {
    console.log(supplier);
  }
}
