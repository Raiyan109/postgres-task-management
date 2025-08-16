import pool from "../../database/db";
import { IUser } from "./user.interface";



export const createUser = async (user: IUser): Promise<IUser> => {
    console.log(user, 'user from model');
    // const result = await pool.query(
    //     `INSERT INTO users (name, phone, role, address, password) 
    //  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    //     [user.name, user.phone, user.password, user.role, user.role || 'pending']
    // );
    // console.log(result, 'result from model');
    // return result.rows[0];
    const result = await pool.query(
        `INSERT INTO users (name, email, phone, role, address, password) 
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [user.name, user.email, user.phone, user.role, user.address, user.password]
    );
    return result.rows[0];
};

export const getAllUsers = async (): Promise<IUser[]> => {
    const result = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
    return result.rows;
};

export const findUserByPhone = async (phone: string): Promise<IUser | null> => {
    const result = await pool.query(
        `SELECT * FROM users WHERE phone = $1 LIMIT 1`,
        [phone]
    );
    return result.rows[0] || null;
};

