import { ITask } from "./task.interface";
import * as TaskModel from '../Task/task.model'

export const addTask = async (task: ITask) => {
    return await TaskModel.createTask(task)
}

export const listTask = async () => {
    return await TaskModel.getAllTasks()
}

export const listSingleTask = async (id: string) => {
    const task = await TaskModel.findTaskById(id);
    if (!task) {
        throw new Error("Task not found");
    }

    return task
}