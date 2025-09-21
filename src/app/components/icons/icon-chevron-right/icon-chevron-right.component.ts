import { Component, input } from "@angular/core";

@Component({
  selector: "icon-chevron-right",
  imports: [],
  templateUrl: "./icon-chevron-right.component.html",
  styleUrl: "./icon-chevron-right.component.scss",
})
export class IconChevronRightComponent {
  size = input<any>("1em");
}
