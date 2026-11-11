import { Models } from "@/prisma/contract";
import { Scalars, Shape } from "@prisma/orm-postgres/components";

export type Talk = Scalars<Models.public_Talk>;

export type TalkWithRelations = Shape<
  Models.public_Talk,
  { "+": "speaker" | "track" }
>;
