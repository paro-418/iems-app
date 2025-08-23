import z from "zod";
import { interestedCoursesNames } from "../interfaces/PotentialStudents.interface";

export const PotentialStudentFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Name is too short, must contain at least 3 characters'),
  phoneNo: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(10, 'Phone number must be at most 10 digits'),
  email: z.email('Invalid email address'),
  interestedCourse: z.enum(interestedCoursesNames).default('all'),
  inquiryText: z.string().min(0).default('').optional(),
});
