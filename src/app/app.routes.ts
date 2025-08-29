import { Routes } from "@angular/router";

import { PageApp, PageIndex, PageNotFound, PageDemo } from "./pages";
// import { AuthGuard, FooDeactivateGuard } from "./middleware/guards";

export const routes: Routes = [
  {
    path: "",
    component: PageIndex,
    // title: 'home'
    pathMatch: "full",
    data: { animation: "0c05141c-0c3b-5d37-8fc0-800d479810e2" },
  },
  {
    path: "demo",
    component: PageDemo,
    data: { animation: "4f1ba5cc-2b55-5004-ab40-ac8ab2eb3588" },
  },
  {
    path: "app",
    component: PageApp,
    data: { animation: "1509882b-5542-5853-9bc3-e1f02b987be6" },
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
    data: { animation: "eadf06c1-8885-5364-87f0-256fa0de7c02" },
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];
