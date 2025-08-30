"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTaskById = exports.getAllTasks = exports.createTask = void 0;
const db_1 = __importDefault(require("../../database/db"));
const createTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query(`INSERT INTO tasks (title, description, status, startTime, endTime, userId)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [task.title, task.description, task.status, task.startTime, task.endTime, task.userId]);
    return result.rows[0];
});
exports.createTask = createTask;
// GET all tasks without relation
// export const getAllTasks = async (): Promise<ITask[]> => {
//     const result = await pool.query('SELECT * FROM tasks ORDER BY startTime DESC')
//     return result.rows
// }
// GET all tasks with relation
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query(`
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
});
exports.getAllTasks = getAllTasks;
// GET single task without relation
// export const findTaskById = async (id: string): Promise<ITask | null> => {
//     const result = await pool.query(
//         `SELECT * FROM tasks WHERE id = $1 LIMIT 1`,
//         [id]
//     );
//     return result.rows[0] || null;
// };
// GET single task with relation
const findTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query(`SELECT 
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
        `, [id]);
    return result.rows[0] || null;
});
exports.findTaskById = findTaskById;
