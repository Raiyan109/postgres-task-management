import pool from "../../database/db";
import { ITask } from "./task.interface";

export const createTask = async (task: ITask): Promise<ITask> => {
    const result = await pool.query(
        `INSERT INTO tasks (title, description, status, startTime, endTime, userId)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [task.title, task.description, task.status, task.startTime, task.endTime, task.userId]
    )
    return result.rows[0]
}

// GET all tasks without relation
// export const getAllTasks = async (): Promise<ITask[]> => {
//     const result = await pool.query('SELECT * FROM tasks ORDER BY startTime DESC')
//     return result.rows
// }

// GET all tasks with relation
export const getAllTasks = async () => {
    const result = await pool.query(`
        SELECT 
            t.id,
            t.title,
            t.status,
            t.description,
            t.starttime AS "startTime",
            t.endtime AS "endTime",
            t.userid   AS "userId",
            u.name     AS "userName",
            u.email    AS "userEmail",
            u.role     AS "userRole"
        FROM tasks t
        JOIN users u ON t.userid = u.id
        ORDER BY t.starttime DESC
    `);

    return result.rows;

    // If you want nested structure
    //     return result.rows.map(row => ({
    //     id: row.id,
    //     title: row.title,
    //     description: row.description,
    //     status: row.status,
    //     startTime: row.startTime,
    //     endTime: row.endTime,
    //     user: {
    //         id: row.userId,
    //         name: row.userName,
    //         email: row.userEmail,
    //         role: row.userRole
    //     }
    // }));
};

// GET single task without relation
// export const findTaskById = async (id: string): Promise<ITask | null> => {
//     const result = await pool.query(
//         `SELECT * FROM tasks WHERE id = $1 LIMIT 1`,
//         [id]
//     );
//     return result.rows[0] || null;
// };


// GET single task with relation
export const findTaskById = async (id: string): Promise<ITask | null> => {
    const result = await pool.query(
        `SELECT 
        t.id,
            t.title,
            t.status,
            t.description,
            t.starttime AS "startTime",
            t.endtime AS "endTime",
            t.userid   AS "userId",
            u.name     AS "userName",
            u.email    AS "userEmail",
            u.role     AS "userRole"
        FROM tasks t
        JOIN users u ON t.userid = u.id
        WHERE t.id = $1   -- 👈 use the parameter here
        `,
        [id]
    );
    return result.rows[0] || null;
};