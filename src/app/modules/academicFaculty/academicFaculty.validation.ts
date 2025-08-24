import z from "zod"

const createAcademicFacultyValidation = z.object({
    name: z.string({error: 'Academic Faculty must be string'}),
});
const updateAcademicFacultyValidation = z.object({
    name: z.string().optional(),
});

export const AcademicFacultyValidation = {
    createAcademicFacultyValidation,
    updateAcademicFacultyValidation,
}