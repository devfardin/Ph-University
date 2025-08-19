import { Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    const { password, student: sutdentData } = req.body;
    try {
        const createUser = await UserService.createStudentIntoBd(sutdentData, password);
        res.status(200).json({
            status: true,
            message: 'User Create Successfully',
            data: createUser
        })
    } catch (error) {
        console.log(error);
    }
}

export const UserController = {
    createStudent,
}