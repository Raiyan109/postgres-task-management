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
        console.log('tasks >>>>>>>>>', tasks);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const getSingleTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await TaskService.listSingleTask(id);
        res.json(user);
    } catch (err: any) {
        res.status(400).json({ message: err.message || "Task find failed" });
    }
};