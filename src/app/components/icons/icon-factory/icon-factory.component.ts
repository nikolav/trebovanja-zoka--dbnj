import { Component, input } from "@angular/core";

@Component({
  selector: "icon-factory",
  imports: [],
  templateUrl: "./icon-factory.component.html",
  styleUrl: "./icon-factory.component.scss",
})
export class IconFactoryComponent {
  size = input<any>("1em");
}
