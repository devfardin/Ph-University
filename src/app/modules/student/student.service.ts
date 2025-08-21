import { TStudent } from './student.interface';
import { studentModel } from './student.model';


const getAllStudentFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};

const deleteStudent = async (id: string) =>{
  const result = await studentModel.updateOne({id},{ isDeleted: true})
  return result;
}

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudent,
};