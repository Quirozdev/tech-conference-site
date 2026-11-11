import * as dotenv from "dotenv";
import dotEnvExpand from "dotenv-expand";
import postgres from "@prisma/orm-postgres/runtime";
import { contractFromJson } from "@prisma/orm-postgres/static";
import type { Contract } from "./contract.d";
import contractJson from "./contract.json" with { type: "json" };
import { Pool } from "pg";

dotEnvExpand.expand(dotenv.config());

export const contract = contractFromJson<Contract>(contractJson);

export const pool = new Pool({
  connectionString: process.env["DATABASE_URL"]!,
  max: 10,
});

export const db = postgres({
  contract,
  pg: pool,
});
