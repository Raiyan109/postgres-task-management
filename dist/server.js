"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const db_1 = __importDefault(require("./app/database/db"));
dotenv_1.default.config();
const PORT = config_1.default.PORT || 5001;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Test DB connection
            yield db_1.default.query('SELECT NOW()');
            console.log('✅ Connected to PostgreSQL');
            app_1.default.listen(PORT, () => {
                console.log(`🚀 Server running on port ${PORT}`);
            });
        }
        catch (err) {
            console.error('❌ Failed to connect to PostgreSQL', err);
            process.exit(1);
        }
    });
}
main();
