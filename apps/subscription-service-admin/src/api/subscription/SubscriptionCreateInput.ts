import { NotificationCreateNestedManyWithoutSubscriptionsInput } from "./NotificationCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  email?: string | null;
  notifications?: NotificationCreateNestedManyWithoutSubscriptionsInput;
};
