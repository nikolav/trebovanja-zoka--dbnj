import {
  Component,
  viewChild,
  AfterViewInit,
  inject,
  computed,
  effect,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { LayoutDefault } from "../../layouts";
import { IconxModule, MaterialUIModule } from "../../modules";
import { ToolbarTitleComponent } from "../../components/app";
import { StoreAuth } from "../../stores";
import { StoresService } from "../../services";

@Component({
  selector: "app-stores",
  imports: [
    LayoutDefault,
    MaterialUIModule,
    IconxModule,
    RouterLink,
    ToolbarTitleComponent,
  ],
  templateUrl: "./stores.component.html",
  styleUrl: "./stores.component.scss",
})
export class StoresComponent implements AfterViewInit {
  readonly displayedColumns = ["id", "name"];
  readonly dd = new MatTableDataSource<any>([]);
  $stores = inject(StoresService);

  matSort = viewChild("tableSorted", { read: MatSort });
  $auth = inject(StoreAuth);

  idToken = computed(() => this.$auth.account()?.getIdToken());

  constructor() {
    effect(() => {
      this.dd.data = this.$stores.data();
    });
  }

  ngAfterViewInit() {
    this.dd.sort = this.matSort()!;
  }

  debug(d: any) {
    console.log(d);
  }
}
