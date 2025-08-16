import { Request, Response } from 'express';
import * as UserService from './user.service';

export const createUser = async (req: Request, res: Response) => {


    try {
        const user = await UserService.addUser(req.body);
        console.log(user, 'user from controller');
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: `Error creating user : ${err}` });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.listUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};
