import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
    user: config.DB_USER || 'postgres',
    host: config.DB_HOST || 'localhost',
    database: config.DB_NAME || 'mydb',
    password: config.DB_PASSWORD || 'password',
    port: Number(config.DB_PORT) || 5432,
});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL');
});

export default pool;
