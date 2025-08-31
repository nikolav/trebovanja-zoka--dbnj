import { Component, input } from "@angular/core";

@Component({
  selector: "icon-envelope",
  imports: [],
  templateUrl: "./icon-envelope.component.html",
  styleUrl: "./icon-envelope.component.scss",
})
export class IconEnvelopeComponent {
  size = input<any>("1em");
}
