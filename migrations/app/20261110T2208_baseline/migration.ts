#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/2b5376d447c58ebec392dce8e80ec5d9fdec66f6ec5c51cecb5d317cea50bd71/contract';
import endContract from '../../snapshots/2b5376d447c58ebec392dce8e80ec5d9fdec66f6ec5c51cecb5d317cea50bd71/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Conference',
        columns: [
          col('brandCode', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('endDate', 'date', { notNull: true, codecRef: { codecId: 'pg/date-string@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('locationId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('startDate', 'date', { notNull: true, codecRef: { codecId: 'pg/date-string@1' } }),
          col('tagline', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Location',
        columns: [
          col('city', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('cityAbbreviation', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('state', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('venue', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Speaker',
        columns: [
          col('avatar', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('bio', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('company', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('featured', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('role', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Talk',
        columns: [
          col('conferenceId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('day', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('endTime', 'time', { notNull: true, codecRef: { codecId: 'pg/time-string@1' } }),
          col('highlighted', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('location', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('speakerId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('startTime', 'time', { notNull: true, codecRef: { codecId: 'pg/time-string@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('trackId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Track',
        columns: [
          col('color', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('conferenceId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'Conference',
        constraint: 'Conference_brandCode_key',
        columns: ['brandCode'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Conference',
        index: 'Conference_locationId_idx_7aae3038',
        columns: ['locationId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Talk',
        index: 'Talk_conferenceId_idx_abfabfd0',
        columns: ['conferenceId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Talk',
        index: 'Talk_speakerId_idx_b4dfd9e9',
        columns: ['speakerId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Talk',
        index: 'Talk_trackId_idx_8b560769',
        columns: ['trackId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Track',
        index: 'Track_conferenceId_idx_abfabfd0',
        columns: ['conferenceId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Conference',
        foreignKey: {
          name: 'Conference_locationId_fkey',
          columns: ['locationId'],
          references: { schema: 'public', table: 'Location', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Talk',
        foreignKey: {
          name: 'Talk_conferenceId_fkey',
          columns: ['conferenceId'],
          references: { schema: 'public', table: 'Conference', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Talk',
        foreignKey: {
          name: 'Talk_speakerId_fkey',
          columns: ['speakerId'],
          references: { schema: 'public', table: 'Speaker', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Talk',
        foreignKey: {
          name: 'Talk_trackId_fkey',
          columns: ['trackId'],
          references: { schema: 'public', table: 'Track', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Track',
        foreignKey: {
          name: 'Track_conferenceId_fkey',
          columns: ['conferenceId'],
          references: { schema: 'public', table: 'Conference', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
