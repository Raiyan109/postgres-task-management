import dotenv from 'dotenv';
import app from './app';
import config from './app/config';
import pool from './app/database/db';

dotenv.config();

const PORT = config.PORT || 5001;

async function main() {
    try {
        // Test DB connection
        await pool.query('SELECT NOW()');
        console.log('✅ Connected to PostgreSQL');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('❌ Failed to connect to PostgreSQL', err);
        process.exit(1);
    }
}

main();
