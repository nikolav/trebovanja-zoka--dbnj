import { Component } from "@angular/core";
import { MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";

@Component({
  selector: "app-orders",
  imports: [MaterialUIModule, LayoutDefault],
  templateUrl: "./orders.component.html",
  styleUrl: "./orders.component.scss",
})
export class OrdersComponent {}
