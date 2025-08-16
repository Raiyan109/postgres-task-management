
import { IUser } from './user.interface';
import * as UserModel from './user.model';

export const addUser = async (user: IUser) => {
    
    return await UserModel.createUser(user);
};

export const listUsers = async () => {
    return await UserModel.getAllUsers();
};
