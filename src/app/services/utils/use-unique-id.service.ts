import { Injectable, inject, signal } from "@angular/core";
import { UseUtilsService } from "../../services";

@Injectable({
  providedIn: "root",
})
export class UseUniqueIdService {
  private $$ = inject(UseUtilsService);
  private prefix: string;

  ID = signal("");

  constructor() {
    this.prefix = `${this.$$.idGen()}:`;
  }

  private idgen() {
    return this.$$.uniqueId(this.prefix);
  }

  next() {
    this.ID.set(this.idgen());
  }
}
