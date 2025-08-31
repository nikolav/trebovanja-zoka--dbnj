import { NgModule } from "@angular/core";

import {
  IconAccount,
  IconBuildings,
  IconCartOutline,
  IconDoorOpenOutline,
  IconEnvelopeComponent,
  IconEyeComponent,
  IconEyeOffComponent,
  IconKeyComponent,
  IconLoading,
  IconLockOpenComponent,
} from "../../components/icons";

const ICONS = [
  IconAccount,
  IconBuildings,
  IconLoading,
  IconCartOutline,
  IconDoorOpenOutline,
  IconLockOpenComponent,
  IconEnvelopeComponent,
  IconKeyComponent,
  IconEyeComponent,
  IconEyeOffComponent,
];

@NgModule({
  // declarations: [],
  imports: [...ICONS],
  exports: [...ICONS],
})
export class IconxModule {}
