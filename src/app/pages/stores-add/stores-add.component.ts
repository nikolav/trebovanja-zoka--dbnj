import { Component, inject } from "@angular/core";
import { IconxModule, MaterialUIModule } from "../../modules";
import { LayoutDefault } from "../../layouts";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ToolbarTitleComponent } from "../../components/app";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-stores-add",
  imports: [
    MaterialUIModule,
    LayoutDefault,
    IconxModule,
    ReactiveFormsModule,
    ToolbarTitleComponent,
    RouterLink,
  ],
  templateUrl: "./stores-add.component.html",
  styleUrl: "./stores-add.component.scss",
})
export class StoresAddComponent {
  private $f = inject(FormBuilder);

  readonly form = this.$f.group({
    name: this.$f.control("", [Validators.required]),
    code: this.$f.control(""),
    address: this.$f.control(""),
    notes: this.$f.control(""),
  });
  onSubmit() {
    console.log("@onSubmit");
    console.log(this.form.value);
  }
}
