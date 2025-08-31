import { Component, inject } from "@angular/core";
// import { FormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";

import { StoreAuth } from "../../stores";
import {
  // IconxModule,
  MaterialUIModule,
} from "../../modules";
import { LayoutDefault } from "../../layouts";
import { AppAuthCard } from "../../components/app";
import { IAuthCreds } from "../../types";

@Component({
  selector: "app-page-auth",
  imports: [
    // FormsModule,
    // IconxModule,
    JsonPipe,
    LayoutDefault,
    MaterialUIModule,
    AppAuthCard,
  ],
  templateUrl: "./page-auth.component.html",
  styleUrl: "./page-auth.component.scss",
})
export class PageAuthComponent {
  $auth = inject(StoreAuth);
  //
  $snackbar = inject(MatSnackBar);
  //
  onAuth(creds: IAuthCreds) {
    this.$auth.authenticate(creds, (error: any) => {
      if (error) {
        this.$snackbar.open("Pokušajte ponovo.", "OK", {
          panelClass: "app-mat-snackbar-danger",
        });
      }
    });
  }
}
