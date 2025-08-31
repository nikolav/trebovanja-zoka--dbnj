import { Component, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IconxModule, MaterialUIModule } from "../../../../modules";
import { IAuthCreds } from "../../../../types";
import { schemaAuthCreds } from "../../../../schemas";
import { UseToggleFlagService } from "../../../../services";

@Component({
  selector: "app-auth-card",
  imports: [MaterialUIModule, IconxModule, FormsModule],
  templateUrl: "./auth-form.component.html",
  styleUrl: "./auth-form.component.scss",
})
export class AuthFormComponent {
  onAuth = output<IAuthCreds>();
  email = model<string>();
  password = model<string>();
  togglePasswordHidden = new UseToggleFlagService().use(true);
  //
  onSubmit() {
    let error;
    try {
      const creds = schemaAuthCreds.parse({
        email: this.email(),
        password: this.password(),
      });
      this.onAuth.emit(creds);
    } catch (e) {
      // pass
      error = e;
    }
    console.log({ "auth:error": error });
  }
}
