import { Request, Response } from 'express';
import { studentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';

const getAllStudentFromDB = catchAsync(async (req, res) => {
  const students = await studentServices.getAllStudentFromDB();
  res.status(200).json({
    status: true,
    message: 'Students Retirived Successfully',
    data: students,
  });
});
const getSingleStudentFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const students = await studentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    status: true,
    message: 'Student Retirived Successfully',
    data: students,
  });

});

const studentDeletedFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const student = await studentServices.deleteStudent(id);
  res.status(200).json({
    status: true,
    message: 'Student deleted successfully',
    data: student,
  })
})

export const StudentColtroller = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  studentDeletedFromDB,
};
