import { Subscription } from "../subscription/Subscription";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  sentAt: Date | null;
  subscription?: Subscription | null;
  updatedAt: Date;
};
