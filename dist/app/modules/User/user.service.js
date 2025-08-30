"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.loginUser = exports.listUsers = exports.addUser = void 0;
const config_1 = __importDefault(require("../../config"));
const createToken_1 = require("../../utils/createToken");
const UserModel = __importStar(require("./user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 10;
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // hash the password
    const hashedPassword = yield bcrypt_1.default.hash(user.password, SALT_ROUNDS);
    // pass hashed password to DB
    return yield UserModel.createUser(Object.assign(Object.assign({}, user), { password: hashedPassword }));
});
exports.addUser = addUser;
const listUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserModel.getAllUsers();
});
exports.listUsers = listUsers;
const loginUser = (phone, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel.findUserByPhone(phone);
    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    const accessToken = (0, createToken_1.createToken)({
        id: user.id,
        phone: user.phone,
        role: user.role,
    }, config_1.default.jwt_access_secret);
    return Object.assign(Object.assign({}, user), { accessToken });
    // remove password before returning
    // const { password: _, ...userWithoutPassword } = user;
    // return userWithoutPassword;
});
exports.loginUser = loginUser;
