import { Component } from "@angular/core";
import { IconxModule, MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";

@Component({
  selector: "app-stores-add",
  imports: [MaterialUIModule, LayoutDefault, IconxModule],
  templateUrl: "./stores-add.component.html",
  styleUrl: "./stores-add.component.scss",
})
export class StoresAddComponent {}
