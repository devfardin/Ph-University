import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";

const createStudent =  catchAsync(async(req, res) => {
    const { password, student: sutdentData } = req.body;
        const createUser = await UserService.createStudentIntoBd(sutdentData, password);
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            success: true,
            message: 'User Create successfully',
            data: createUser
        })
})

export const UserController = {
    createStudent,
}