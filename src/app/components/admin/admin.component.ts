import { Component, OnInit } from "@angular/core";
import { BikeService } from "../../services/bike.service";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  editField: string;
  public bikes;

  // inject the bikeservice
  constructor(private bikeService: BikeService) {}

  ngOnInit() {
    // tell how to call it
    this.getBikes();
  }

  /*

  TODO

  editRow(row) {
    this.bikes.filter(row => row.isEditable).map(r => { r.isEditable = false; return r })
    row.isEditable = true;
  }

  save(row) {
    row.isEditable = false;
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.bikes[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  */

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {
        this.bikes = data;
      },
      err => console.error(err),
      () => console.log("bikes loaded")
    );

    // this.bikes.map(row => {
    //   row.isEditable = false;
    // });
  }
}
