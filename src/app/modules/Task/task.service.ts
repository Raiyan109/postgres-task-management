import { ITask } from "./task.interface";
import * as TaskModel from '../Task/task.model'

export const addTask = async (task: ITask) => {
    return await TaskModel.createTask(task)
}

export const listTask = async () => {
    return await TaskModel.getAllTasks()
}