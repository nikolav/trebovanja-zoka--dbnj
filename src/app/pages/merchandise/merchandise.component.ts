import { Component } from "@angular/core";
import { MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";

@Component({
  selector: "app-merchandise",
  imports: [MaterialUIModule, LayoutDefault],
  templateUrl: "./merchandise.component.html",
  styleUrl: "./merchandise.component.scss",
})
export class MerchandiseComponent {}
