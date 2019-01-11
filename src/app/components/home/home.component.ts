import { Component, OnInit } from "@angular/core";
import { BikeService } from "../../services/bike.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // help to accepte user input
  models: string[] = [
    "Globo MTB 29 Full Suspension",
    "Globo Carbon Fiber Race Series",
    "Globo Time Trial Blad"
  ];
  // to validate app
  bikeform: FormGroup;
  // to disolay to user to see if we have err problems
  validMessage: string = "";

  // when created, going to create another bikeservice
  constructor(private bikeService: BikeService) {}

  ngOnInit() {
    /*
      initial bike form object and validation obkects
      create a new form group and specify all atributes
      we want on the form and set to form controls.
      One is default value for control and teh second param is a type
      of validators. This is required so user has to enter before
      being successful
    */
    this.bikeform = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      model: new FormControl("", Validators.required),
      serialNumber: new FormControl("", Validators.required),
      purchasePrice: new FormControl("", Validators.required),
      purchaseDate: new FormControl("", Validators.required),
      // pass in no params to form control
      contact: new FormControl()
    });
  }

  submitRegistration() {
    // check whether bike form is valid
    if (this.bikeform.valid) {
      // if so
      this.validMessage = "Your bike registration has been submitted. Thanks!";
      // we're passing in the bike form thay contains values of user input and
      // will return observarnb or promose and handl the data
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          // just reset again
          this.bikeform.reset();
          return true;
        },
        error => {
          // or bubble as error message
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage =
        "Please fill out the form before submitting. Thank you!";
    }
  }
}
