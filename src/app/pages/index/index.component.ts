import { Component, OnInit, OnDestroy, inject } from "@angular/core";
// import { JsonPipe } from "@angular/common";

import { LayoutDefault } from "../../layouts";
import { IconxModule, MaterialUIModule } from "../../modules";
import { UseUtilsService } from "../../services";

@Component({
  selector: "page-index",
  imports: [
    IconxModule,
    LayoutDefault,
    MaterialUIModule,
    // JsonPipe,
    // ReactiveFormsModule,
  ],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
  providers: [],
})
export class IndexComponent implements OnInit, OnDestroy {
  $$ = inject(UseUtilsService);

  ngOnInit() {}
  ngOnDestroy() {}
}
//
