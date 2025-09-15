import { Component, input } from "@angular/core";

@Component({
  selector: "icon-invoice-add-outline",
  imports: [],
  templateUrl: "./icon-invoice-add-outline.component.html",
  styleUrl: "./icon-invoice-add-outline.component.scss",
})
export class IconInvoiceAddOutlineComponent {
  size = input<any>("1em");
}
