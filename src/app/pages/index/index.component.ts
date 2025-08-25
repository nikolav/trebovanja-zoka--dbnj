import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
// import { PopperjsModule } from "../../modules";

import { LayoutDefault } from "../../layouts";
import { MaterialUIModule } from "../../modules";
import {
  IconAccount,
  // IconLoading,
  // IconBuildings,
} from "../../components/icons";
import {
  CloudMessagingService,
  ManageSubscriptionsService,
} from "../../services";

@Component({
  selector: "page-index",
  imports: [
    IconAccount,
    JsonPipe,
    LayoutDefault,
    MaterialUIModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
  providers: [],
})
export class IndexComponent implements OnInit, OnDestroy {
  private $subs = new ManageSubscriptionsService();
  private $cm = inject(CloudMessagingService);

  constructor() {
    this.$subs.push({
      cm: this.$cm.messages()?.subscribe((msg) => {
        console.log({ msg });
      }),
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.$subs.destroy();
  }
}
//
