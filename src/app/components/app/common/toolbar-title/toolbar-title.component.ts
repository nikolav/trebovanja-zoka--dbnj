import { Component } from "@angular/core";
import { IconxModule, MaterialUIModule } from "../../../../modules";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-toolbar-title",
  imports: [MaterialUIModule, IconxModule, RouterModule],
  templateUrl: "./toolbar-title.component.html",
  styleUrl: "./toolbar-title.component.scss",
})
export class ToolbarTitleComponent {}
