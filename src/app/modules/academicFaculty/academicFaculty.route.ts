import express from 'express'
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router.post('/create-academic-faculty', validateRequest(AcademicFacultyValidation.createAcademicFacultyValidation), AcademicFacultyController.createAcademicFacultyIntoDB);
router.get('/', AcademicFacultyController.getAllAcademicFacultyFromDB);
router.get('/:id', AcademicFacultyController.getSingleAcademicFacultyFromDB);
router.patch('/:id', validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidation), AcademicFacultyController.updateAcademicFacultyInfoBD);

export const AcademicFacultyRoutes = router;