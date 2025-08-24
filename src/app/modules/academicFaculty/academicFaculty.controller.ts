import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFacultyIntoDB = catchAsync(async(req, res)=> {
    const result = await AcademicFacultyService.createAcademicFacultyIntoDB(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Academic Faculty is created successfully',
        data: result,
    })
})

const getAllAcademicFacultyFromDB = catchAsync(async(req, res)=> {
    const result = await AcademicFacultyService.getAllAcademicFacultyFromDB();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Academic Faculty are retrived successfully',
        data: result,
    })
})
const getSingleAcademicFacultyFromDB = catchAsync(async(req, res)=> {
    const { id } = req.params;
    const result = await AcademicFacultyService.getSingleAcademicFacultyFromDB(id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Academic Faculty are retrived successfully',
        data: result,
    })
})

const updateAcademicFacultyInfoBD = catchAsync(async(req, res)=> {
    const { id } = req.params;
    const result = await AcademicFacultyService.updateAcademicFacultyInfoBD(id, req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Academic Faculty is update successfully',
        data: result,
    })
})

export const AcademicFacultyController = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyInfoBD,
}