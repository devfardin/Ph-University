import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../middlwares/validateRequest";
import { academicSemesterValidation } from "./academicSemester.validation";


const router = express.Router();
router.post('/create-academic-semester', validateRequest(academicSemesterValidation.createAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemesterIntoBD);


export const AcademicSemesterRoutes = router;