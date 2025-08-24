import { AcademicFacultyModel } from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
 const result = await AcademicFacultyModel.create(payload);
 return result;
}
const getAllAcademicFacultyFromDB = async () => {
 const result = await AcademicFacultyModel.find();
 return result;
}
const getSingleAcademicFacultyFromDB = async (id: string) => {
 const result = await AcademicFacultyModel.findById({id});
 return result;
}
const updateAcademicFacultyInfoBD = async (id: string, payload: Partial<TAcademicFaculty>) => {
    const result = await AcademicFacultyModel.findOneAndUpdate(
        {_id: id},
         payload,
         {
            new: true,
         }
    );
    return result;
}

export const AcademicFacultyService = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyInfoBD
}