import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { academicSemestercode, academicSemesterName, months } from "./academicSemester.constant";



const academicSemesterShema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        enum: academicSemesterName,
        required: [true, 'Academic name is required'],
    },
    code: {
        type: String,
        enum: academicSemestercode,
        required: [true, 'Academic Code is required'],
    },
    year: {
        type: Date,
        required: [true, 'Academic year is required'],
    },
    startMonth: {
        type: String,
        required: true,
        emit: months,
    },
    endMonth: {
        type: String,
        required: true,
        emit: months,
    }
}, {
    timestamps: true,
});

export const AcademicSemesterModel = model<TAcademicSemester>('AcademicSemester', academicSemesterShema);

