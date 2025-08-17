import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudentFromDB = async (req: Request, res: Response) => {
  try {
    const students = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      status: true,
      message: 'Students Retirived Successfully',
      data: students,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudentFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const students = await studentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      status: true,
      message: 'Student Retirived Successfully',
      data: students,
    });
  } catch (error) {
    console.log(error);
  }
};

const studentDeletedFromDB = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const student = await studentServices.deleteStudent(id);
    res.status(200).json({
      status: true,
      message: 'Student deleted successfully',
      data: student,
    })
  } catch (error){
    console.log(error);
    
  }
}

export const StudentColtroller = {
  createStudent,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  studentDeletedFromDB,
};
