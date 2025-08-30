import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
    // user: config.DB_USER || 'postgres',
    // host: config.DB_HOST || 'localhost',
    // database: config.DB_NAME || 'mydb',
    // password: config.DB_PASSWORD || 'password',
    // port: Number(config.DB_PORT) || 5432,
    connectionString: config.DB_URL,   // use connection string from Neon
    ssl: {
        rejectUnauthorized: false,       // Neon requires SSL in serverless envs like Vercel
    },
});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL');
});

export default pool;

// import { Pool } from 'pg';
// import config from '../config';


// const pool = new Pool({
//     connectionString: config.DB_URL,   // use connection string from Neon
//     ssl: {
//         rejectUnauthorized: false,       // Neon requires SSL in serverless envs like Vercel
//     },
// });

// pool.on('connect', () => {
//     console.log('✅ Connected to PostgreSQL');
// });

// export default pool;

