import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { TaskRoutes } from '../modules/Task/task.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoutes,
    },
    {
        path: '/task',
        route: TaskRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;