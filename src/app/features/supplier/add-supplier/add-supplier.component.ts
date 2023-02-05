import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";

import { NGXLogger } from "ngx-logger";
import { NotificationService } from "src/app/core/services/notification.service";
import { SupplierList } from "../supplier-list/supplier-list.component";
import {
  GSTNumberValidator,
  MobileNumberValidator,
  PinCodeValidator,
} from "./../../../shared/validators";

@Component({
  selector: "app-add-supplier",
  templateUrl: "./add-supplier.component.html",
  styleUrls: ["./add-supplier.component.scss"],
})
export class AddSupplierComponent implements OnInit {
  readonly SUPPLIER_TYPE = {
    ADD: 'Add Supplier',
    EDIT: 'Edit Supplier',
  }
  PAGE_TYPE : string;
  supplierForm: FormGroup;
  supplier: SupplierList;
  loading = false;
  submitted = false;
  formControlValues = [
    {
      label: "Supplier Name",
      placeholder: "Enter your Supplier Name",
      formControlName: "supplierName",
      inputType: "text",
      validatorsList: ["required"],
    },
    {
      label: "Mobile Number",
      placeholder: "Enter your Mobile Number",
      formControlName: "mobileNum",
      inputType: "text",
      validatorsList: ["required", "invalid"],
    },
    {
      label: "GSTIN/TIN Number",
      placeholder: "Enter your GSTIN/TIN Number",
      formControlName: "gstNum",
      inputType: "string",
      validatorsList: ["required", "invalid"],
    },
    {
      label: "Owner Name",
      placeholder: "Enter your Owner Name",
      formControlName: "ownerName",
      inputType: "text",
      validatorsList: ["required"],
    },
    {
      label: "Owner Mobile Number",
      placeholder: "Enter your Owner Mobile Number",
      formControlName: "ownerMobileNum",
      inputType: "text",
      validatorsList: ["required", "invalid"],
    },
    {
      label: "Shop Address",
      placeholder: "Enter your Shop Address",
      formControlName: "shopAddress",
      inputType: "text",
      validatorsList: ["required"],
    },
    {
      label: "City",
      placeholder: "Enter your City",
      formControlName: "city",
      inputType: "text",
      validatorsList: ["required"],
    },
    {
      label: "Pin Code",
      placeholder: "Enter your Pin Code",
      formControlName: "pinCode",
      inputType: "number",
      validatorsList: ["required",'invalid'],
    },
    {
      label: "Remarks",
      placeholder: "Enter your Remarks",
      formControlName: "remarks",
      inputType: "text",
      validatorsList: [],
    },
  ];

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.supplier = this.router.getCurrentNavigation()?.extras?.state?.supplier;
  }

  ngOnInit() {
    this.PAGE_TYPE = this.route.snapshot.params['id'] ? this.SUPPLIER_TYPE.EDIT : this.SUPPLIER_TYPE.ADD;
    this.logger.log(this.PAGE_TYPE + " loaded");
    this.titleService.setTitle("Khonsu - " + this.PAGE_TYPE);


    this.supplierForm = this.fb.group({
      supplierName: ["", Validators.required],
      mobileNum: ["", [Validators.required, MobileNumberValidator(), Validators.minLength(10), Validators.maxLength(10)]],
      gstNum: ["", [Validators.required, GSTNumberValidator()]],
      ownerName: ["", Validators.required],
      ownerMobileNum: ["", [Validators.required, MobileNumberValidator(), Validators.minLength(10), Validators.maxLength(10)]],
      shopAddress: [""],
      city: [""],
      pinCode: ["", [PinCodeValidator()]],
      remarks: [""],
    });

    if(this.PAGE_TYPE == this.SUPPLIER_TYPE.EDIT){
      console.log(this.supplier);
      this.supplierForm.patchValue({
        supplierName : this.supplier?.supplier_name,
        mobileNum : this.supplier?.phone,
        gstNum : this.supplier?.gst,
        ownerName : this.supplier?.shop_name,
        ownerMobileNum : this.supplier?.phone,
        shopAddress : this.supplier?.supplier_name,
      })
      if(this.supplierForm.invalid){
        this.router.navigate(["supplier/list"]);
      }
    }
  }

  addSupplier() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.supplierForm.invalid) {
      return;
    }

    this.loading = true;
    if(this.PAGE_TYPE == this.SUPPLIER_TYPE.EDIT){
      this.loading = false;
      this.notificationService.openSnackBar("Customers Updated");
      this.router.navigate(["supplier/list"]);
    } else if(this.PAGE_TYPE == this.SUPPLIER_TYPE.ADD){
      this.notificationService.openSnackBar("Customers Added");
      this.loading = false;
      this.supplierForm.reset();
    // this.authenticationService
    //   .register(this.supplierForm.value)
    //   .subscribe(
    //     (data) => {
          // this.loading = false;
    //     },
    //     (error) => {
    //       // this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   );
    }

  }
}
