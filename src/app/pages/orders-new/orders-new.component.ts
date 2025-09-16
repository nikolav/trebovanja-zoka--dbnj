import { Component } from "@angular/core";
import { IconxModule, MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-orders-new",
  imports: [MaterialUIModule, LayoutDefault, IconxModule, RouterModule],
  templateUrl: "./orders-new.component.html",
  styleUrl: "./orders-new.component.scss",
})
export class OrdersNewComponent {}
