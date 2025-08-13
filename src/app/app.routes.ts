import { Routes } from "@angular/router";

import { PageApp, PageIndex, PageNotFound, PageDemo } from "./pages";
// import { AuthGuard, FooDeactivateGuard } from "./middleware/guards";

export const routes: Routes = [
  {
    path: "",
    component: PageIndex,
    // title: 'home'
    pathMatch: "full",
    data: { animationToken: "2a55cc51-1977-5c08-8e2e-b71e731f8e28" },
  },
  {
    path: "demo",
    component: PageDemo,
    data: { animationToken: "a1cfd2b1-b910-576e-96ab-8c8ff1f380f7" },
  },
  {
    path: "app",
    component: PageApp,
    data: { animationToken: "30805907-0f08-554d-a21f-4b4db7b0ef98" },
    // protect route access
    // canActivate: [AuthGuard],
    // canDeactivate: [FooDeactivateGuard],
    // data: {
    //   FOO: "BAR",
    // },
    // protect child routes access
    // canActivateChild: [AuthGuard],
    // resolve: { foo: FooResolver },
  },
  // {
  //   path: "assets",
  //   component: Foo,
  //   canActivateChild: [AuthGuard],
  //   children: [
  //     {
  //       path: ":id",
  //       component: Bar,
  //     },
  //     {
  //       path: ":id/edit",
  //       component: Baz,
  //     },
  //   ],
  // },
  {
    path: "not-found",
    component: PageNotFound,
    data: { animationToken: "96663e95-d2c3-50b5-bdbc-90d4ae65cb8b" },
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];
