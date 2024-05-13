import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from 'dotenv';
import { assertDefined } from '../utils/assertions';
import { Options } from '@nestjs/common';

dotenvConfig();

assertDefined(process.env.GAME_SERVICE_HOST, 'GAME_SERVICE_HOST is not defined');
assertDefined(process.env.GAME_SERVICE_PORT, 'GAME_SERVICE_PORT is not defined');
assertDefined(process.env.PLAYER_SERVICE_HOST, 'PLAYER_SERVICE_HOST is not defined');
assertDefined(process.env.PLAYER_SERVICE_PORT, 'PLAYER_SERVICE_PORT is not defined');
assertDefined(process.env.GAME_STATE_SERVICE_HOST, 'GAME_STATE_SERVICE_HOST is not defined');
assertDefined(process.env.GAME_STATE_SERVICE_PORT, 'GAME_STATE_SERVICE_PORT is not defined');
assertDefined(process.env.DATABASE_TYPE, 'DATABASE_TYPE is not defined');
assertDefined(process.env.DATABASE_HOST, 'DATABASE_HOST is not defined');
assertDefined(process.env.DATABASE_PORT, 'DATABASE_PORT is not defined');
assertDefined(process.env.DATABASE_USERNAME, 'DATABASE_USERNAME is not defined');
assertDefined(process.env.DATABASE_PASSWORD, 'DATABASE_PASSWORD is not defined');
assertDefined(process.env.DATABASE_NAME, 'DATABASE_NAME is not defined');

const TYPE_ORM_CONFIG_TOKEN = "typeorm";

//typeORMConfig
export const servicesConfig = registerAs( TYPE_ORM_CONFIG_TOKEN, () => ({
    gameService: {
        host: process.env.GAME_SERVICE_HOST,
        port: process.env.GAME_SERVICE_PORT,
    },
    playerService: {
        host: process.env.PLAYER_SERVICE_HOST,
        port: process.env.PLAYER_SERVICE_PORT,
    },
    gameStateService: {
        host: process.env.GAME_STATE_SERVICE_HOST,
        port: process.env.GAME_STATE_SERVICE_PORT,
    },
    dataSource: {
        type: process.env.DATABASE_TYPE as DataSourceOptions['type'],
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    } as unknown as DataSource,
}));

export type ServicesConfig = ReturnType<typeof servicesConfig>;

// export const dataSourceConfig = {
//   type: process.env.DATABASE_TYPE as DataSourceOptions['type'],
//   host: process.env.DATABASE_HOST,
//   port: parseInt(process.env.DATABASE_PORT),
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
// } as DataSource;