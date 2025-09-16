import { Component, input } from "@angular/core";

@Component({
  selector: "icon-store-add",
  imports: [],
  templateUrl: "./icon-store-add.component.html",
  styleUrl: "./icon-store-add.component.scss",
})
export class IconStoreAddComponent {
  size = input<any>("1em");
}
