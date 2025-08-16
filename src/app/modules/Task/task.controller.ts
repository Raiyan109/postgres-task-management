import { Request, Response } from 'express';
import * as TaskService from '../Task/task.service'


export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskService.addTask(req.body);
        console.log(task, 'task from controller');
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: `Error creating user : ${err}` });
    }
};

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await TaskService.listTask();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
};