import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IconxModule, MaterialUIModule } from "../../../../modules";

@Component({
  selector: "app-nav-main",
  imports: [RouterModule, MaterialUIModule, IconxModule],
  templateUrl: "./app-nav-main.component.html",
  styleUrl: "./app-nav-main.component.scss",
})
export class AppNavMainComponent {}
