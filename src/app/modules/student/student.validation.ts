import { z } from "zod";

// ✅ User Name Schema
export const userNameZodSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
});

// ✅ Guardian Schema
export const guardianZodSchema = z.object({
    fatherName: z.string().min(1, "Father name is required"),
    fatherOccupation: z.string().min(1, "Father occupation is required"),
    fatherContactNo: z.string().min(1, "Father contact number is required"),
    motherName: z.string().min(1, "Mother name is required"),
    motherOccupation: z.string().min(1, "Mother occupation is required"),
    motherContactNo: z.string().min(1, "Mother contact number is required"),
});

// ✅ Local Guardian Schema
export const localGuardianZodSchema = z.object({
    name: z.string().min(1, "Local guardian name is required"),
    occupation: z.string().min(1, "Local guardian occupation is required"),
    contactNo: z.string().min(1, "Local guardian contact number is required"),
    address: z.string().optional(),
});

// ✅ Main Student Schema
const createStudentValidationSchema = z.object({
    body: z.object({
        password: z.string(),
        student: z.object({
            // user: z.string().min(1, "User id is required"), // Will hold ObjectId as string
            name: userNameZodSchema,
            gender: z.enum(["mail", "femail"]).optional(), // match your enum typo
            dataOfBirth: z.string().optional(),
            email: z
                .string()
                .email("Email is not valid")
                .min(1, "Email is required"),
            contactNo: z.string().min(1, "Contact number is required"),
            emergencyContactNumber: z.string().min(1, "Emergency contact number is required"),
            bloodgroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
            presentAddress: z.string().optional(),
            permanentAddress: z.string().optional(),
            guardian: guardianZodSchema,
            localGrardian: localGuardianZodSchema,
            admissionSemester: z.string(),
            profileImg: z.string().optional(),
        })
    })
});

export const studentValidations = {
    createStudentValidationSchema
}