import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
// import { PopperjsModule } from "../../modules";

import { LayoutDefault } from "../../layouts";
import { MaterialUIModule } from "../../modules";
import {
  // StoreAuth,
  StoreMain,
} from "../../stores";
import {
  UseUtilsService,
  UseDisplayService,
  UseToggleFlagService,
  LightboxService,
  UseUniqueIdService,
} from "../../services";
import {
  IconAccount,
  // IconLoading,
  // IconBuildings,
} from "../../components/icons";
import { AnimatecssDirective } from "../../directives";

@Component({
  selector: "page-index",
  imports: [
    IconAccount,
    // IconBuildings,
    // IconLoading,
    JsonPipe,
    LayoutDefault,
    MaterialUIModule,
    ReactiveFormsModule,
    AnimatecssDirective,
  ],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
  providers: [],
})
export class IndexComponent implements OnInit, OnDestroy {
  private f = inject(FormBuilder);
  $$ = inject(UseUtilsService);
  $main = inject(StoreMain);
  // $auth = inject(StoreAuth);
  $display = inject(UseDisplayService);
  $lightbox = inject(LightboxService);
  $toggle = new UseToggleFlagService().use(false);
  $id = new UseUniqueIdService();

  val = this.f.control("");

  list = ["foo", "bar", "baz"];

  ok(d: any) {
    console.log(d);
  }
  ngOnInit() {}
  ngOnDestroy() {}

  debug() {
    console.log(this.$main.store());
  }
}
//
