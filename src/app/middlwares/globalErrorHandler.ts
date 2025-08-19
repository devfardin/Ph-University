import { NextFunction, Request, Response } from "express";

const globarErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) =>{
    const statusCode = 500;
    const message = error.message || 'Something want Wrong';
    return res.status(statusCode).json({
        success: false,
        message,
        error,
    })
}

export default globarErrorHandler;