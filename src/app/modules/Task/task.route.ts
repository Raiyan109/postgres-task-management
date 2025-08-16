import { Router } from 'express';
import { createTask, getTasks } from './task.controller';



const router = Router();

router.post('/', createTask);
router.get('/', getTasks);


export const TaskRoutes = router;
