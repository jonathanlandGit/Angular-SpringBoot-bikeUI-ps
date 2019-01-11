import { Component, OnInit } from "@angular/core";
import { BikeService } from "../../services/bike.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { throwError } from "rxjs";

@Component({
  selector: "app-view-registration",
  templateUrl: "./view-registration.component.html",
  styleUrls: ["./view-registration.component.css"]
})
export class ViewRegistrationComponent implements OnInit {
  // goal is to get specif bike
  public bikeReg;
  registerForm: FormGroup;

  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private _datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.registerForm = this._fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      phone: ["", Validators.required],
      model: ["", Validators.required],
      serialNumber: ["", Validators.required],
      purchasePrice: ["", Validators.required],
      purchaseDate: ["", Validators.required],
      contact: [true]
    });
    // get the latest and pull the id from this
    // id acttul one for routing .ts file
    this.getBikeReg(this.route.snapshot.params.id);
  }

  // can use anywhere in component
  getBikeReg(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data;
      },
      err => console.error(err),
      () => console.log("bikes loaded")
    );
  }

  injectDataIntoForm(data) {
    this.registerForm.setValue({
      name: data.name,
      email: data.email,
      phone: data.phone,
      model: data.model,
      serialNumber: data.serialNumber,
      purchasePrice: data.purchasePrice,
      purchaseDate: data.purchaseDate,
      contact: data.contact
    });
  }

  onSubmit() {
    const payload = this.registerForm.value;
    payload.id = this.bikeReg.id;

    if (this.registerForm.valid) {
      payload.purchaseDate = this._datePipe.transform(
        new Date(payload.purchaseDate),
        "dd-MM-yyyy"
      );
    }

    this.bikeService.editBike(payload, this.bikeReg.id).subscribe(
      data => {
        this.bikeReg = data;
        this.injectDataIntoForm(data);
      },
      error => throwError(error)
    );
    console.log(this.bikeReg);
  }
}
