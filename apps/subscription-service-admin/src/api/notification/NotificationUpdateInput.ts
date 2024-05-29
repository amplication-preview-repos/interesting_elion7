import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  sentAt?: Date | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
