import z from "zod";
import { academicSemestercode, academicSemesterName, months } from "./academicSemester.constant";

const createAcademicSemesterValidationSchema = z.object({
    body: z.object({
        name: z.enum(academicSemesterName),
        code: z.enum(academicSemestercode),
        year: z.date(),
        startmonth: z.enum(months),
        endmonth: z.enum(months),
    })
})

export const academicSemesterValidation = {
    createAcademicSemesterValidationSchema
}