import { Response } from "express";
import { success } from "zod";

const sendResponse = <T>(res: Response, data:{
    statusCode: number,
    success: boolean,
    message?: string,
    data: T
}) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data
    })
}

export default sendResponse;