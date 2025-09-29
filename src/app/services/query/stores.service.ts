import {
  computed,
  effect,
  inject,
  Injectable,
  OnDestroy,
  signal,
} from "@angular/core";
import { Apollo } from "apollo-angular";
import { from } from "rxjs";
import { Socket } from "ngx-socket-io";
import {
  AppConfigService,
  ManageSubscriptionsService,
  UseUtilsService,
} from "../utils";
import { TRecordJson } from "../../types";
import { Q_assetsStoresList, M_assetsStoresAdd } from "../../graphql";
import { StoreAuth } from "../../stores";

@Injectable({
  providedIn: "root",
})
export class StoresService implements OnDestroy {
  private $$ = inject(UseUtilsService);
  private $config = inject(AppConfigService);
  private $apollo = inject(Apollo);
  private $io = inject(Socket);
  private $auth = inject(StoreAuth);
  private $subs = new ManageSubscriptionsService();

  private io = this.$io.fromEvent(this.$config.io.IOEVENT_ASSETS_STORES_CHANGE);
  private q = this.$apollo.watchQuery({
    query: Q_assetsStoresList,
    pollInterval: this.$config.graphql.QUERY_POLL_INTERVAL,
  });

  readonly enabled = computed(() => this.$auth.isAuth());
  readonly data = signal<any[]>([]);

  constructor() {
    effect((onCleanup) => {
      if (!this.enabled()) return;
      this.$subs.push({
        io: this.io.subscribe(() => this.reload()),
        data: this.q.valueChanges.subscribe((res) => {
          this.data.set(this.$$.get(res, "data.assetsStoresList.status", []));
        }),
      });
      onCleanup(() => {
        this.destroy();
      });
    });
  }

  commit(fields: TRecordJson) {
    return this.$apollo.mutate({
      mutation: M_assetsStoresAdd,
      variables: { fields },
    });
  }
  drop(...ids: any[]) {}
  reload() {
    return from(this.q.refetch());
  }
  destroy() {
    this.$subs.destroy();
    // this.data.set([]);
  }
  ngOnDestroy() {
    this.destroy();
  }
}
