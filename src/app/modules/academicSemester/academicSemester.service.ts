import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoBD = async(payload: TAcademicSemester) => {
    
  
    if(academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid Semester Code');
    }
    
    const result = await AcademicSemesterModel.create(payload);
    return result;
}

export const academicSemesterService = {
    createAcademicSemesterIntoBD
} 