import z from "zod";

const UserValidationSchema = z.object({
  id: z.string({
    error: 'Id is required',
  }),
  password: z.string().optional(),
  needsPasswordChange: z.boolean().default(true),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]).default('in-progress'),
  isDeleted: z.boolean().default(false),
});


export const userValidation = {
    UserValidationSchema
}