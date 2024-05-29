import { NotificationUpdateManyWithoutSubscriptionsInput } from "./NotificationUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  email?: string | null;
  notifications?: NotificationUpdateManyWithoutSubscriptionsInput;
};
