import { Routes } from "@angular/router";

import { PageIndex, PageNotFound, PageAuth } from "./pages";
import {
  AuthGuard,
  // FooDeactivateGuard
  unauthenticatedGuard,
} from "./middleware/guards";

export const routes: Routes = [
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
    path: "",
    component: PageIndex,
    pathMatch: "full",
    data: { animation: "0c05141c-0c3b-5d37-8fc0-800d479810e2" },
    canActivate: [AuthGuard],
  },
  {
    path: "auth",
    component: PageAuth,
    data: { animation: "67f71b4a-f48c-5cd5-b3dc-0b13bee691d0" },
    canActivate: [unauthenticatedGuard],
  },
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
