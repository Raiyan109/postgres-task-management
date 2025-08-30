"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("../config"));
const pool = new pg_1.Pool({
    user: config_1.default.DB_USER || 'postgres',
    host: config_1.default.DB_HOST || 'localhost',
    database: config_1.default.DB_NAME || 'mydb',
    password: config_1.default.DB_PASSWORD || 'password',
    port: Number(config_1.default.DB_PORT) || 5432,
});
pool.on('connect', () => {
    console.log('Connected to PostgreSQL');
});
exports.default = pool;
