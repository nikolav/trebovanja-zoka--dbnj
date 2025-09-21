import { Component, OnInit, OnDestroy, inject } from "@angular/core";
// import { JsonPipe } from "@angular/common";

import { LayoutDefault } from "../../layouts";
import { IconxModule, MaterialUIModule } from "../../modules";
import { UseUtilsService } from "../../services";
import { RouterLink } from "@angular/router";

@Component({
  selector: "page-index",
  imports: [IconxModule, LayoutDefault, MaterialUIModule, RouterLink],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
  providers: [],
})
export class IndexComponent implements OnInit, OnDestroy {
  $$ = inject(UseUtilsService);
  links = [
    {
      title: "Dobavljači",
      route: "/stores",
      image: "/hznteiifpyr.png",
    },
    {
      title: "Roba",
      route: "/products",
      image: "/dgmttbnxzyj.png",
    },
    {
      title: "Fakture",
      route: "/orders",
      image: "/jladxkcmtyl.png",
    },
  ];

  ngOnInit() {}
  ngOnDestroy() {}
}
//
