import { Component } from "@angular/core";
import { LayoutDefault } from "../../layouts";
import { MaterialUIModule } from "../../modules";

@Component({
  selector: "app-stores",
  imports: [LayoutDefault, MaterialUIModule],
  templateUrl: "./stores.component.html",
  styleUrl: "./stores.component.scss",
})
export class StoresComponent {}
