import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class BikeService {
  constructor(private http: HttpClient) {}

  getBikes() {
    // anything on the following path will be used on spring boot service
    // we are just forwarding to sprint book and this will return as an observable
    return this.http.get("/server/api/v1/bikes");
  }

  getBike(id: number) {
    return this.http.get("/server/api/v1/bikes/" + id);
  }
  // take in bike object and post to server
  createBikeRegistration(bike) {
    // convert using stringify
    let body = JSON.stringify(bike);
    // returns observatival priomose
    return this.http.post("/server/api/v1/bikes", body, httpOptions);
  }
  addBike(bike) {
    return this.http.post("/server/api/v1/bikes", bike, httpOptions);
  }

  deleteBike(id: number) {
    return this.http.delete("/server/api/v1/bikes/" + id);
  }

  editBike(bike, id) {
    return this.http.put("/server/api/v1/bikes/" + id, bike, httpOptions);
  }
}
