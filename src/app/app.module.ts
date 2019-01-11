import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BikeService } from "./services/bike.service";
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { ViewRegistrationComponent } from "./components/view-registration/view-registration.component";
import { PaginatorModule } from "primeng/paginator";
import { TableModule } from "primeng/table";
import { MultiSelectModule } from "primeng/primeng";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PaginatorModule,
    TableModule,
    MultiSelectModule
  ],
  providers: [BikeService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
