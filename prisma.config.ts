import * as dotenv from "dotenv";
import dotEnvExpand from "dotenv-expand";
import "dotenv/config";
import { definePrismaConfig } from "@prisma/cli-engine";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";

dotEnvExpand.expand(dotenv.config());

export default definePrismaConfig({
  orm: ormConfig({
    contract: "./src/prisma/contract.prisma",
    db: {
      connection: process.env["DATABASE_URL_UNPOOLED"]!,
    },
  }),
});
