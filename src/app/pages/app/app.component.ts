import { Component, effect, input, model, signal } from "@angular/core";

import { IconxModule, MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";
import { ICanComponentDeactivate } from "../../types";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "page-app",
  imports: [LayoutDefault, MaterialUIModule, IconxModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements ICanComponentDeactivate {
  value = model<any>();
  constructor() {}
  //
  ok() {
    console.log(Math.random());
  }
  //
  canDeactivate() {
    return true;
  }
}
