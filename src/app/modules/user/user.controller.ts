import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    const { password, student: sutdentData } = req.body;
    try {
        const createUser = await UserService.createStudentIntoBd(sutdentData, password);
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            success: true,
            message: 'User Create successfully',
            data: createUser
        })
    } catch (error) {
        next(error)
    }
}

export const UserController = {
    createStudent,
}