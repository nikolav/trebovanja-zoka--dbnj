import { Component, inject } from "@angular/core";
import { IconxModule, MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";
import { StoreAuth } from "../../stores";

@Component({
  selector: "app-account",
  imports: [MaterialUIModule, IconxModule, LayoutDefault],
  templateUrl: "./account.component.html",
  styleUrl: "./account.component.scss",
})
export class AccountComponent {
  readonly $auth = inject(StoreAuth);
}
