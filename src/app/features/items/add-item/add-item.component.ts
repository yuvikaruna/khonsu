import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";

import { NGXLogger } from "ngx-logger";
import { NotificationService } from "src/app/core/services/notification.service";
import { ItemsList } from "../list-item/list-item.component";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  readonly ITEM_TYPE = {
    ADD: 'Add Items',
    EDIT: 'Edit Items',
  }
  PAGE_TYPE : string;
  itemsForm: FormGroup;
  items: ItemsList;
  loading = false;
  submitted = false;

  typesArr: any[] = [
    {value: 'gold', viewValue: 'Gold'},
    {value: 'silver', viewValue: 'Silver'},
    {value: 'platinum', viewValue: 'Platinum'},
  ];
  certificationArr: any[] = [
    {value: '916', viewValue: '916'},
    {value: 'silver', viewValue: 'Silver'},
    {value: 'platinum', viewValue: 'Platinum'},
  ];
  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.items = this.router.getCurrentNavigation()?.extras?.state?.items;
  }

  ngOnInit() {
    this.PAGE_TYPE = this.route.snapshot.params['id'] ? this.ITEM_TYPE.EDIT : this.ITEM_TYPE.ADD;
    this.logger.log(this.PAGE_TYPE + " loaded");
    this.titleService.setTitle("Khonsu - " + this.PAGE_TYPE);
  

    this.itemsForm = this.fb.group({
      itemId: ["", Validators.required],
      itemName: ["", Validators.required],
      type: ["", Validators.required],
      certification: ["", Validators.required],
      remarks: [""],
    });

    if(this.PAGE_TYPE == this.ITEM_TYPE.EDIT){
      console.log(this.items);
      this.itemsForm.patchValue({
        itemId : this.items?.item_id,
        itemName : this.items?.item_name,
        type : this.items?.type,
        certification : this.items?.certification,
        remarks : this.items?.remarks,
      })
      if(this.itemsForm.invalid){
        this.router.navigate(["items/list"]);
      }
    }
  }

  addSupplier() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.itemsForm.invalid) {
      return;
    }

    this.loading = true;
    if(this.PAGE_TYPE == this.ITEM_TYPE.EDIT){
      this.loading = false;
      this.notificationService.openSnackBar("Customers Updated");
      this.router.navigate(["items/list"]);
    } else if(this.PAGE_TYPE == this.ITEM_TYPE.ADD){
      this.notificationService.openSnackBar("Customers Added");
      this.loading = false;
      this.itemsForm.reset();
    // this.authenticationService
    //   .register(this.itemsForm.value)
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
