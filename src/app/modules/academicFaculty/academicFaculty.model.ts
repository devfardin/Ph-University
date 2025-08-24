import { model, Schema } from "mongoose";

const academicFacultyShema = new Schema<TAcademicFaculty>({
    name: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true,
})

export const AcademicFacultyModel = model<TAcademicFaculty>('AcademicFaculty', academicFacultyShema)