import {
  Component,
  OnInit,
  Renderer2,
  computed,
  effect,
  inject,
} from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
} from "@angular/router";

import { MaterialUIModule } from "./modules";
import {
  EmitterService,
  AppConfigService,
  UseUtilsService,
  LocalStorageService,
  NavUtilsService,
} from "./services";
import { StoreFlags } from "./stores";
import { routeTransitionBlurInOut } from "./assets/route-transitions";
import { AppNavMain } from "./components/app";

@Component({
  selector: "app-root",
  imports: [RouterModule, MaterialUIModule, AppNavMain],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [],
  animations: [routeTransitionBlurInOut],
})
export class AppComponent implements OnInit {
  private $router = inject(Router);
  private $renderer = inject(Renderer2);

  private $$ = inject(UseUtilsService);
  private $config = inject(AppConfigService);
  private $emitter = inject(EmitterService);
  private $storage = inject(LocalStorageService);
  private $navUtils = inject(NavUtilsService);

  // #theme
  private appThemeDark_ = computed(() =>
    String(this.$storage.item(this.$config.key.APP_THEME_DARK) || "")
  );

  // toggle sidenav flags
  readonly isActiveSidenav = this.$config.key.IS_ACTIVE_APP_SIDENAV;
  readonly $flags = inject(StoreFlags);

  constructor() {
    this.$router.events.subscribe((event) => {
      // @route-change:emit
      if (event instanceof NavigationStart)
        this.$emitter.subject.next(this.$config.events.ROUTER_NAVIGATION_START);
      if (
        this.$$.some([
          event instanceof NavigationEnd,
          event instanceof NavigationCancel,
          event instanceof NavigationError,
        ])
      )
        this.$emitter.subject.next(this.$config.events.ROUTER_NAVIGATION_END);
    });
    // toggle html.class @storage:push:[CLASS_APP_THEME_DARK]
    effect(() => {
      const clsDark = this.$config.CLASS_APP_THEME_DARK;
      if (!this.appThemeDark_()) {
        this.$renderer.removeClass(document.querySelector("html"), clsDark);
      } else {
        this.$renderer.addClass(document.querySelector("html"), clsDark);
      }
    });
  }
  ngOnInit() {
    // @auth redirect
    this.$emitter.subject.subscribe((event) => {
      if (this.$config.events.EVENT_TYPE_AUTH === this.$$.get(event, "type")) {
        const isAuth = event.payload;
        if (isAuth) {
          this.$router.navigate([
            this.$config.app.ROUTE_PATH_REDIRECT_ATHENTICATED,
          ]);
          return;
        } else {
          this.$navUtils.hardReload();
        }
      }
    });
    // @аpp-init
    setTimeout(() =>
      this.$emitter.subject.next(this.$config.events.EVENT_APP_INIT)
    );
  }
  routeTransitionPrepareOutlet(outlet: RouterOutlet) {
    return this.$$.get(outlet, "activatedRouteData.animation", "--DEFAULT--");
  }
}
