import express from 'express';
import { StudentColtroller } from './student.controller';

const router = express.Router();

router.get('/', StudentColtroller.getAllStudentFromDB);
router.get('/:id', StudentColtroller.getSingleStudentFromDB);
router.patch('/:id', StudentColtroller.studentDeletedFromDB)

export const studentRoutes = router;
