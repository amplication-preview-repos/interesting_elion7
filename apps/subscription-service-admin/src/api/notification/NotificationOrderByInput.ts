import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sentAt?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
