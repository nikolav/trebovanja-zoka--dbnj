import { Component, input } from "@angular/core";

@Component({
  selector: "icon-eye-off",
  imports: [],
  templateUrl: "./icon-eye-off.component.html",
  styleUrl: "./icon-eye-off.component.scss",
})
export class IconEyeOffComponent {
  size = input<any>("1em");
}
