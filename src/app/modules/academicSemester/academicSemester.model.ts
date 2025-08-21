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
        type: String,
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

academicSemesterShema.pre('save', async function(next){
    const isSemesterExists = await AcademicSemesterModel.findOne({
        name: this.name,
        year: this.year,
    })
    if(isSemesterExists) {
        throw new Error('Semester is already exists!')
    }
    next();
})


export const AcademicSemesterModel = model<TAcademicSemester>('AcademicSemester', academicSemesterShema);

