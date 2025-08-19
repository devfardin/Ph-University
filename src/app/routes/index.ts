import { Router } from 'express'
import { studentRoutes } from '../modules/student/student.route';
import { UserRoute } from '../modules/user/user.router';

const router = Router()

const moduelRoutes = [
    { path: '/students',
        route: studentRoutes
    },
    { path: '/users',
        route: UserRoute
    },
]
moduelRoutes.forEach(route => router.use(route.path, route.route))

export default router;