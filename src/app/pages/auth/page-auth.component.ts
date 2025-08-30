import { Component, inject } from "@angular/core";
import { StoreAuth } from "../../stores";
import { JsonPipe } from "@angular/common";
import { MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";

@Component({
  selector: "app-page-auth",
  imports: [
    // IconxModule,
    JsonPipe,
    LayoutDefault,
    MaterialUIModule,
  ],
  templateUrl: "./page-auth.component.html",
  styleUrl: "./page-auth.component.scss",
})
export class PageAuthComponent {
  $auth = inject(StoreAuth);
}
