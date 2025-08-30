import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { JsonPipe } from "@angular/common";
// import { ReactiveFormsModule } from "@angular/forms";

import { LayoutDefault } from "../../layouts";
import { MaterialUIModule } from "../../modules";
import { IconLoading } from "../../components/icons";
import {
  AppConfigService,
  EmitterService,
  LocalStorageService,
  UsePageTitleService,
  UseUtilsService,
} from "../../services";

@Component({
  selector: "page-index",
  imports: [
    IconLoading,
    JsonPipe,
    LayoutDefault,
    MaterialUIModule,
    // ReactiveFormsModule,
  ],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
  providers: [],
})
export class IndexComponent implements OnInit, OnDestroy {
  $$ = inject(UseUtilsService);
  $config = inject(AppConfigService);
  $storage = inject(LocalStorageService);
  $emitter = inject(EmitterService);

  $title = inject(UsePageTitleService);

  constructor() {}

  ok() {
    this.$storage.switch(
      this.$config.key.APP_THEME_DARK,
      this.$config.CLASS_APP_THEME_DARK,
      ""
    );
  }
  ok2() {}
  ngOnInit() {}
  ngOnDestroy() {}
}
//
