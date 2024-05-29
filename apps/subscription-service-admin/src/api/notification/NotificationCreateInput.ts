import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  sentAt?: Date | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
