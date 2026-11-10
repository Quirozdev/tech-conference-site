#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/2b5376d447c58ebec392dce8e80ec5d9fdec66f6ec5c51cecb5d317cea50bd71/contract';
import startContract from '../../snapshots/2b5376d447c58ebec392dce8e80ec5d9fdec66f6ec5c51cecb5d317cea50bd71/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/b87051c566100dc94b60c7a870854a4022d4e9d9bb443afd015a51b7dd3eb0b3/contract';
import endContract from '../../snapshots/b87051c566100dc94b60c7a870854a4022d4e9d9bb443afd015a51b7dd3eb0b3/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addRequiredColumnToEmptyTable({
        schema: 'public',
        table: 'Conference',
        column: 'name',
        type: 'text',
      }),
      this.addUnique({
        schema: 'public',
        table: 'Conference',
        constraint: 'Conference_name_key',
        columns: ['name'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
