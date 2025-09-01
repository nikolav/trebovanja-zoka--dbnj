import { Component, input } from "@angular/core";

@Component({
  selector: "icon-logout",
  imports: [],
  templateUrl: "./icon-logout.component.html",
  styleUrl: "./icon-logout.component.scss",
})
export class IconLogoutComponent {
  size = input<any>("1em");
}
