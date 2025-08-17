import { TStudent } from './student.interface';
import { studentModel } from './student.model';

const createStudentIntoDB = async (student: TStudent) => {
  const studentId = await studentModel.isUserExists(student.id)
  if (studentId) {
    throw new Error('Already Exis this user')
  }

  const result = await studentModel.create(student);
  return result;
};

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
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudent,
};
