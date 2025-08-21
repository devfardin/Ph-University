import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterService } from "./academicSemester.service";

const createAcademicSemesterIntoBD = catchAsync(async (req, res) => {
    const payload = req.body
    const result = await AcademicSemesterService.createAcademicSemesterIntoBD(payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Academic semester create successfully',
        data: result
    })
})

const getAllAcademicSemesterFromDB = catchAsync(async (req, res) => {
    const academicSemester = await AcademicSemesterService.getAllAcademicSemester();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'All Academic Semester retrive successfull',
        data: academicSemester,
    })
})


export const AcademicSemesterController = {
    createAcademicSemesterIntoBD,
    getAllAcademicSemesterFromDB
}