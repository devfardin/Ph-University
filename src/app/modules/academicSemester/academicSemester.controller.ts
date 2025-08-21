import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterService } from "./academicSemester.service";

const createAcademicSemesterIntoBD = catchAsync(async (req, res) => {
    const payload = req.body
    const result = await academicSemesterService.createAcademicSemesterIntoBD(payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Academic semester create successfully',
        data: result
    })
})


export const AcademicSemesterController = {
    createAcademicSemesterIntoBD
}