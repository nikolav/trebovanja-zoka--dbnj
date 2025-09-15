import { Component, input } from "@angular/core";

@Component({
  selector: "icon-storefront",
  imports: [],
  templateUrl: "./icon-storefront-outline.component.html",
  styleUrl: "./icon-storefront-outline.component.scss",
})
export class IconStorefrontOutlineComponent {
  size = input<any>("1em");
}
