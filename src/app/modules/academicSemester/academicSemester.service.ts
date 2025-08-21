import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoBD = async (payload: TAcademicSemester) => {

    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid Semester Code');
    }

    const result = await AcademicSemesterModel.create(payload);
    return result;
}

const getAllAcademicSemester = async () => {
    const result = await AcademicSemesterModel.find();
    return result;
}
const getSingleAcademicSemester = async (id: string) => {
    const result = await AcademicSemesterModel.findOne({ _id: id });
    return result;
}


export const AcademicSemesterService = {
    createAcademicSemesterIntoBD,
    getAllAcademicSemester,
    getSingleAcademicSemester
} 