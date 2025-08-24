import { Router } from 'express'
import { studentRoutes } from '../modules/student/student.route';
import { UserRoute } from '../modules/user/user.router';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = Router()

const moduelRoutes = [
    { path: '/students',
        route: studentRoutes,
    },
    { path: '/users',
        route: UserRoute,
    },
    { path: '/academic-semester',
        route: AcademicSemesterRoutes,
    },
    { path: '/academic-faculty',
        route: AcademicFacultyRoutes,
    },
]
moduelRoutes.forEach(route => router.use(route.path, route.route))

export default router;