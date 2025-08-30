"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    PORT: 5001,
    DB_USER: "postgres",
    DB_HOST: "localhost",
    DB_NAME: "postgres-express-task-management",
    DB_PASSWORD: "ksrcsr109@postgres",
    DB_PORT: 5432,
    // bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    DB_URL: 'postgresql://neondb_owner:npg_uSLr6PYpiR9o@ep-aged-silence-ad0ld6e8-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require', // Neon connection string
    jwt_access_secret: 'jkdkfjkdfj'
};
