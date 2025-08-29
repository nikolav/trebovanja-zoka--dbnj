import { Injectable, signal, inject, computed, effect } from "@angular/core";
import {
  onMessage,
  getMessaging,
  getToken,
  isSupported as messagingIsSupported,
  // deleteToken as deleteFCMToken,
} from "firebase/messaging";
import type { Messaging } from "firebase/messaging";
import { Observable } from "rxjs";

import { NotificationsRequestService } from "./notifications-request.service";
import { StoreAuth } from "../../stores";
import { app as firebaseApp } from "../../config/firebase";
import { UseUtilsService, AppConfigService } from "../../services";
import { TOrNoValue } from "../../types";
import { VAPID_KEY } from "../../config";

//##
@Injectable({
  providedIn: "root",
})
export class CloudMessagingService {
  private $$ = inject(UseUtilsService);
  private $config = inject(AppConfigService);
  private $auth = inject(StoreAuth);
  private $notifications = inject(NotificationsRequestService);
  private $client = signal<TOrNoValue<Messaging>>(null);

  private tokensFCM = computed(() =>
    this.$$.get(
      this.$auth.profile(),
      this.$config.key.CLOUD_MESSAGING_TOKENS,
      {}
    )
  );
  private service_ready = computed(
    () =>
      null != this.$client() &&
      this.$notifications.granted() &&
      this.$auth.isAuth()
  );

  messages = signal<TOrNoValue<Observable<any>>>(null);

  constructor() {
    // 1) setup client messaging
    (async () => {
      if (!(await messagingIsSupported())) {
        throw Error(
          "Firebase Cloud Messaging is not supported in this browser."
        );
      }
      const service = getMessaging(firebaseApp);
      this.$client.set(service);
    })();

    // 2) fetch/persist FCM token whenever service becomes ready
    effect(() => {
      if (!this.service_ready()) return;

      // don’t block the effect; run async work inside
      (async () => {
        const client = this.$client()!;
        const tokenClientFCM = await getToken(client, {
          vapidKey: VAPID_KEY,
        });

        // user may have blocked notifications
        if (!tokenClientFCM) return;

        // save fcm-token
        if (!this.$$.has(this.tokensFCM(), tokenClientFCM)) {
          await this.$auth.profilePatch({
            [this.$config.key.CLOUD_MESSAGING_TOKENS]: {
              [tokenClientFCM]: true,
            },
          });
        }
      })();
    });

    // 3) Provide foreground messages stream once client exists
    effect(() => {
      const client = this.$client();
      if (!client) return;
      if (!this.messages()) {
        this.messages.set(
          new Observable((observer) =>
            onMessage(client, (dd) => {
              observer.next(dd);
            })
          )
        );
      }
    });

    // 4) Cleanup token on logout or permission revoked
    // effect(() => {
    //   const client = this.$client();
    //   const isAuth = this.$auth.isAuth();
    //   const granted = this.$notifications.granted();

    //   if (!client) return;

    //   // If user logged out or permission is no longer granted, try deleting known tokens
    //   if (!isAuth || !granted) {
    //     (async () => {
    //       try {
    //         // Best effort: delete any known tokens for this device
    //         // (If you store multiple per device, keep track and iterate them.)
    //         await deleteFCMToken(client);
    //       } catch {
    //         // pass
    //       }
    //     })();
    //   }
    // });
  }
  // # Optional helper: call when you want to force-refresh the token
  // async refreshToken() {
  //   let token: TOrNoValue<string>;
  //   if (this.service_ready()) {
  //     const client = this.$client()!;

  //     token = await getToken(client, {
  //       vapidKey: VAPID_KEY,
  //     });

  //     if (token && !this.$$.has(this.tokensFCM(), token)) {
  //       await this.$auth.profilePatch({
  //         [this.$config.key.CLOUD_MESSAGING_TOKENS]: { [token]: true },
  //       });
  //     }
  //   }
  //   return token;
  // }
}
