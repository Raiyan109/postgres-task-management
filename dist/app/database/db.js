"use strict";
// import { Pool } from 'pg';
// import config from '../config';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = new Pool({
//     user: config.DB_USER || 'postgres',
//     host: config.DB_HOST || 'localhost',
//     database: config.DB_NAME || 'mydb',
//     password: config.DB_PASSWORD || 'password',
//     port: Number(config.DB_PORT) || 5432,
// });
// pool.on('connect', () => {
//     console.log('Connected to PostgreSQL');
// });
// export default pool;
const pg_1 = require("pg");
const config_1 = __importDefault(require("../config"));
const pool = new pg_1.Pool({
    connectionString: config_1.default.DB_URL, // use connection string from Neon
    ssl: {
        rejectUnauthorized: false, // Neon requires SSL in serverless envs like Vercel
    },
});
pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL');
});
exports.default = pool;
