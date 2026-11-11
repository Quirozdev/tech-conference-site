import { Models } from "@/prisma/contract";
import { Scalars, Shape } from "@prisma/orm-postgres/components";

export type Speaker = Scalars<Models.public_Speaker>;

export type SpeakerWithRelations = Shape<
  Models.public_Speaker,
  {
    talk: {
      "+": "track";
    };
  }
>;
