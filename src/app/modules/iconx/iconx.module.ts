import { NgModule } from "@angular/core";

import {
  IconAccount,
  IconBuildings,
  IconCartOutline,
  IconDoorOpenOutline,
  IconEnvelopeComponent,
  IconEyeComponent,
  IconEyeOffComponent,
  IconHomeComponent,
  IconKeyComponent,
  IconLoading,
  IconLockOpenComponent,
  IconLogoutComponent,
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
  IconHomeComponent,
  IconLogoutComponent,
];

@NgModule({
  // declarations: [],
  imports: [...ICONS],
  exports: [...ICONS],
})
export class IconxModule {}
