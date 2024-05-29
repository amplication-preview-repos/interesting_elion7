import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type SubscriptionWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  notifications?: NotificationListRelationFilter;
};
