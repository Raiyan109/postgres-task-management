import { Router } from 'express';
import { createTask, getSingleTask, getTasks } from './task.controller';



const router = Router();

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getSingleTask);


export const TaskRoutes = router;
