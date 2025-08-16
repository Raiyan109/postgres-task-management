
import { IUser } from './user.interface';
import * as UserModel from './user.model';
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const addUser = async (user: IUser) => {
    // hash the password
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);

    // pass hashed password to DB
    return await UserModel.createUser({
        ...user,
        password: hashedPassword,
    });
};
export const listUsers = async () => {
    return await UserModel.getAllUsers();
};
