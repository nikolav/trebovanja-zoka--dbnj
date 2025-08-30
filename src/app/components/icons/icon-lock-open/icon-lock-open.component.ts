import { Component, input } from "@angular/core";

@Component({
  selector: "icon-lock-open",
  imports: [],
  templateUrl: "./icon-lock-open.component.html",
  styleUrl: "./icon-lock-open.component.scss",
})
export class IconLockOpenComponent {
  size = input<any>("1em");
}
