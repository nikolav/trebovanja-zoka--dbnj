import { Component, OnInit, OnDestroy, inject, effect } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, FormControl } from "@angular/forms";
// import { PopperjsModule } from "../../modules";

import { LayoutDefault } from "../../layouts";
import { MaterialUIModule } from "../../modules";
import { StoreAuth, StoreMain } from "../../stores";
import {
  UseUtilsService,
  UseDisplayService,
  UseToggleFlagService,
  UseUniqueIdService,
  CloudMessagingService,
} from "../../services";
import {
  IconAccount,
  // IconLoading,
  // IconBuildings,
} from "../../components/icons";
import { AnimatecssDirective } from "../../directives";
import { TOrNoValue } from "../../types";
import { Subscription } from "rxjs";

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
  $auth = inject(StoreAuth);
  $display = inject(UseDisplayService);
  $toggle = new UseToggleFlagService().use(false);
  $id = new UseUniqueIdService();
  $cm = inject(CloudMessagingService);
  private cm_: TOrNoValue<Subscription> = null;

  val = this.f.control("");

  list = ["foo", "bar", "baz"];
  ff = new FormControl([]);

  constructor() {
    effect((cleanup) => {
      cleanup(() => {
        this.cm_?.unsubscribe();
      });
      this.cm_ = this.$cm.message()?.subscribe((msg) => {
        console.log({ msg });
      });
    });
  }
  ok(d: any) {
    console.log(d);
  }
  ngOnInit() {
    this.ff.valueChanges.subscribe((v) => {
      console.log({ v });
    });
  }
  ngOnDestroy() {
    this.cm_?.unsubscribe();
  }

  debug() {
    console.log(this.$main.store());
  }
}
//
