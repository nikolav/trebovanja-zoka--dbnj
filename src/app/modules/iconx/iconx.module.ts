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
  IconFactoryComponent,
  IconStorefrontOutlineComponent,
  IconInvoiceAddOutlineComponent,
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
  IconFactoryComponent,
  IconStorefrontOutlineComponent,
  IconInvoiceAddOutlineComponent,
];

@NgModule({
  // declarations: [],
  imports: [...ICONS],
  exports: [...ICONS],
})
export class IconxModule {}
