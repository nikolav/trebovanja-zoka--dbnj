import { Component, input } from "@angular/core";

@Component({
  selector: "icon-key",
  imports: [],
  templateUrl: "./icon-key.component.html",
  styleUrl: "./icon-key.component.scss",
})
export class IconKeyComponent {
  size = input<any>("1em");
}
