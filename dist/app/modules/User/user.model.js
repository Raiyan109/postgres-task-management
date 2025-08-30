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
exports.findUserByPhone = exports.getAllUsers = exports.createUser = void 0;
const db_1 = __importDefault(require("../../database/db"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query(`INSERT INTO users (name, email, phone, role, address, password) 
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [user.name, user.email, user.phone, user.role, user.address, user.password]);
    return result.rows[0];
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('SELECT * FROM users ORDER BY created_at DESC');
    return result.rows;
});
exports.getAllUsers = getAllUsers;
const findUserByPhone = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query(`SELECT * FROM users WHERE phone = $1 LIMIT 1`, [phone]);
    return result.rows[0] || null;
});
exports.findUserByPhone = findUserByPhone;
