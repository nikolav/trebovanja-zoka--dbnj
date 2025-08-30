import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { StoreAuth } from "../../stores";
import { AppConfigService } from "../../services";

export const unauthenticatedGuard: CanActivateFn = (route, state) => {
  const $auth = inject(StoreAuth);
  const $router = inject(Router);
  const $config = inject(AppConfigService);
  return $auth.isAuth()
    ? $router.createUrlTree([$config.app.ROUTE_PATH_REDIRECT_ATHENTICATED])
    : true;
};
