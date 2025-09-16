import { Component } from "@angular/core";
import { LayoutDefault } from "../../layouts";
import { IconxModule, MaterialUIModule } from "../../modules";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-stores",
  imports: [LayoutDefault, MaterialUIModule, IconxModule, RouterLink],
  templateUrl: "./stores.component.html",
  styleUrl: "./stores.component.scss",
})
export class StoresComponent {}
