import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TStudent } from "../student/student.interface";
import { studentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoBd = async ( studentData: TStudent, password: string,) => {
    // const studentId = await studentModel.isUserExists(studentData.id)
    // if (studentId) {
    //     throw new Error('Already Exis this user')
    // }

    //    create a user object
    const userData: Partial<TUser> = {};


    // if password not given, use default password
    if (!password) {
        userData.password = config.default_pass as string;
    } else {
        userData.password = password
    }
    // set student role
    userData.role = 'student'


    const generateStudentId = (payload: TAcademicSemester){
        
    }

    // manually generated it
    userData.id = 'stu-002'
    // create a user
    const newUser = await UserModel.create(userData);

    // create a studnet
    if(Object.keys(newUser).length) {
        // set id
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = await studentModel.create(studentData)
        return newStudent
    }


    return newUser;
}

export const UserService = {
    createStudentIntoBd,
} 