import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    PORT: 5001,
    DB_USER: "postgres",
    DB_HOST: "localhost",
    DB_NAME: "postgres-express-task-management",
    DB_PASSWORD: "ksrcsr109@postgres",
    DB_PORT: 5432,
    // bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,

    jwt_access_secret: 'jkdkfjkdfj'
};