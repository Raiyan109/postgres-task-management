
import config from '../../config';
import { createToken } from '../../utils/createToken';
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

export const loginUser = async (phone: string, password: string) => {
    const user = await UserModel.findUserByPhone(phone);
    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const accessToken = createToken(
        {
            id: user.id as string,
            phone: user.phone,
            role: user.role,
        },
        config.jwt_access_secret as string,
        // '7d'
    );


    return { ...user, accessToken };

    // remove password before returning
    // const { password: _, ...userWithoutPassword } = user;
    // return userWithoutPassword;
};

