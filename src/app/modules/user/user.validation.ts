import z from "zod";

const UserValidationSchema = z.object({
  id: z.string(),
  password: z.string(),
  needsPasswordChange: z.boolean().default(true),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]).optional(),
  isDeleted: z.boolean().default(false),
});


export const userValidation = {
    UserValidationSchema
}