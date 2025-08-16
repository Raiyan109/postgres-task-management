import pool from "../../database/db";
import { ITask } from "./task.interface";

export const createTask = async (task: ITask): Promise<ITask> => {
    const result = await pool.query(
        `INSERT INTO tasks (title, description, status, startTime, endTime)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [task.title, task.description, task.status, task.startTime, task.endTime]
    )
    return result.rows[0]
}

export const getAllTasks = async (): Promise<ITask[]> => {
    const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC')
    return result.rows
}