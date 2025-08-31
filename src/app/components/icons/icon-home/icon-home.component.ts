import { Component, input } from "@angular/core";

@Component({
  selector: "icon-home",
  imports: [],
  templateUrl: "./icon-home.component.html",
  styleUrl: "./icon-home.component.scss",
})
export class IconHomeComponent {
  size = input<any>("1em");
}
