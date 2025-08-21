import express from 'express'
import { UserController } from './user.controller';
import validateRequest from '../../middlwares/validateRequest';
import { studentValidations } from '../student/student.validation';

const router = express.Router();

router.post('/create-student', validateRequest(studentValidations.createStudentValidationSchema), UserController.createStudent)

export const UserRoute = router