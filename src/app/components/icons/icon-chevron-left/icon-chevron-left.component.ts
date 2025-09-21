import { Component, input } from "@angular/core";

@Component({
  selector: "icon-chevron-left",
  imports: [],
  templateUrl: "./icon-chevron-left.component.html",
  styleUrl: "./icon-chevron-left.component.scss",
})
export class IconChevronLeftComponent {
  size = input<any>("1em");
}
