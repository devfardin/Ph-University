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
const getSingleAcademicSemesterFromDB = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const academicSemester = await AcademicSemesterService.getSingleAcademicSemester(semesterId);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Single Academic Semester retrive successfull',
        data: academicSemester,
    })
})
const updateAcademicSemesterFromDB = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const body = req.body
    const academicSemester = await AcademicSemesterService.updateAcademicSemesster(semesterId, body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Update academic Semester successfull',
        data: academicSemester,
    })
})


export const AcademicSemesterController = {
    createAcademicSemesterIntoBD,
    getAllAcademicSemesterFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterFromDB
}