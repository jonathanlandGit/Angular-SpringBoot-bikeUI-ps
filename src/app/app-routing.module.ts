import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { ViewRegistrationComponent } from "./components/view-registration/view-registration.component";

// when the route goes here, it will forward and go'
// to the home component

// most specific to least specific in the order!
const routes: Routes = [
  { path: "", component: HomeComponent },

  // we're going to view a specific id and look it up in compnent and resolve registration
  // thios goes before more gneric admit path
  { path: "admin/view/:id", component: ViewRegistrationComponent },

  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
