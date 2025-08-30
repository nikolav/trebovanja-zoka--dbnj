import { Component, inject } from "@angular/core";
import { StoreAuth } from "../../stores";
import { JsonPipe } from "@angular/common";
import { IconxModule, MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";
import { IconLockOpenComponent } from "../../components/icons/icon-lock-open/icon-lock-open.component";

@Component({
  selector: "app-page-auth",
  imports: [IconxModule, JsonPipe, LayoutDefault, MaterialUIModule, IconLockOpenComponent],
  templateUrl: "./page-auth.component.html",
  styleUrl: "./page-auth.component.scss",
})
export class PageAuthComponent {
  $auth = inject(StoreAuth);
}
