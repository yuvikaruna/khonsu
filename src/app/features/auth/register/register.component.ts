import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
// import { AccountService, AlertService } from "../../shared/services";
import { MustMatch } from "src/app/shared/validators/must-match.validator";
import { AuthenticationService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) // private alertService: AlertService
  {
    // TODO: redirect to home if already logged in
    // if (this.accountService.userValue) {
    //   this.router.navigate(["/"]);
    // }
  }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          // this.alertService.success("Registration successful", {
          //   keepAfterRouteChange: true
          // });
          this.router.navigate(["../login"], { relativeTo: this.route });
        },
        (error) => {
          // this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.registerForm.markAsUntouched()
  }

}
