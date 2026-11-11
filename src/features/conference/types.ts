import { Models } from "@/prisma/contract";
import { Scalars, Shape } from "@prisma/orm-postgres/components";

export type Conference = Scalars<Models.public_Conference>;

export type ConferenceWithLocation = Shape<
  Models.public_Conference,
  { "+": "location" }
>;
