import { Component, input } from "@angular/core";

@Component({
  selector: "icon-eye",
  imports: [],
  templateUrl: "./icon-eye.component.html",
  styleUrl: "./icon-eye.component.scss",
})
export class IconEyeComponent {
  size = input<any>("1em");
}
