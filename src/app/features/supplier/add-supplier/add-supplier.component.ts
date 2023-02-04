import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";

import { NGXLogger } from "ngx-logger";
import { NotificationService } from "src/app/core/services/notification.service";
import { GSTNumberValidator } from "src/app/shared/validators/gst-number.validator";

@Component({
  selector: "app-add-supplier",
  templateUrl: "./add-supplier.component.html",
  styleUrls: ["./add-supplier.component.scss"],
})
export class AddSupplierComponent implements OnInit {
  supplierForm: FormGroup;
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
      inputType: "number",
      validatorsList: ["required"],
    },
    {
      label: "Owner Name",
      placeholder: "Enter your Owner Name",
      formControlName: "ownerName",
      inputType: "text",
      validatorsList: ["required"],
    },
    {
      label: "GSTIN/TIN Number",
      placeholder: "Enter your GSTIN/TIN Number",
      formControlName: "gstNum",
      inputType: "string",
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
      validatorsList: ["required"],
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
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Khonsu - Add Supplier");
    this.logger.log("Add Supplier loaded");

    this.supplierForm = this.fb.group({
      supplierName: ["", Validators.required],
      mobileNum: ["", [Validators.required]],
      gstNum: ["", [Validators.required, GSTNumberValidator()]],
      ownerName: ["", Validators.required],
      mobileNo: ["", Validators.required],
      shopAddress: ["", Validators.required],
      city: ["", Validators.required],
      pinCode: ["", Validators.required],
      remarks: [""],
    });
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
    // this.authenticationService
    //   .register(this.supplierForm.value)
    //   .subscribe(
    //     (data) => {
    //       this.loading = false;
    //     },
    //     (error) => {
    //       // this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   );
  }
}
