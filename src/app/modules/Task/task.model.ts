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
    const result = await pool.query('SELECT * FROM tasks ORDER BY startTime DESC')
    return result.rows
}

export const findTaskById = async (id: string): Promise<ITask | null> => {
    const result = await pool.query(
        `SELECT * FROM tasks WHERE id = $1 LIMIT 1`,
        [id]
    );
    return result.rows[0] || null;
};