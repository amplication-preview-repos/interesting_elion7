import { Notification } from "../notification/Notification";

export type Subscription = {
  createdAt: Date;
  email: string | null;
  id: string;
  notifications?: Array<Notification>;
  updatedAt: Date;
};
