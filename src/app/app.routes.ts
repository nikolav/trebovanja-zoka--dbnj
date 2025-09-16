import { Routes } from "@angular/router";

import {
  PageAccount,
  PageAuth,
  PageIndex,
  PageNotFound,
  PageOrders,
  PageOrdersNew,
  PageProducts,
  PageStores,
  PageStoresAdd,
} from "./pages";
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
    data: {
      animation: "67f71b4a-f48c-5cd5-b3dc-0b13bee691d0",
    },
    canActivate: [unauthenticatedGuard],
  },
  {
    path: "account",
    component: PageAccount,
    canActivate: [AuthGuard],
    data: {
      animation: "8eeb01ae-dcf2-5579-a323-b5f147cea137",
    },
  },
  {
    path: "stores",
    component: PageStores,
    canActivate: [AuthGuard],
    data: {
      animation: "d8408ce9-3c6d-54b8-8246-6a32fb17221b",
    },
  },
  {
    path: "stores-add",
    component: PageStoresAdd,
    canActivate: [AuthGuard],
    data: {
      animation: "d3aa713a-2b43-5535-a955-3e14b28d2038",
    },
  },

  {
    path: "products",
    component: PageProducts,
    canActivate: [AuthGuard],
    data: {
      animation: "a456451a-f714-568e-b1cd-b4cc8230f1c1",
    },
  },
  {
    path: "orders",
    component: PageOrders,
    canActivate: [AuthGuard],
    data: {
      animation: "ea16832b-c04f-515c-8ea2-6da5ad9935a7",
    },
  },
  {
    path: "orders-new",
    component: PageOrdersNew,
    canActivate: [AuthGuard],
    data: {
      animation: "afb6e370-267c-5341-8f15-eb39fc53caec",
    },
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
