import { KeyboardTypeOptions } from 'react-native';
import z from 'zod';
import { PotentialStudentFormSchema } from '../../components/DownloadAdmissionForm';

export const interestedCoursesNames = ['all', 'PGDIS', 'PGDEM'] as const;

export type interestedCoursesNameTypes =
  (typeof interestedCoursesNames)[number];

export interface IPotentialStudents {
  name: string;
  email: string;
  phoneNo: string;
  inquiryText?: string;
  interestedCourse?: interestedCoursesNameTypes;
}

export type TPotentialStudentForm = z.input<typeof PotentialStudentFormSchema>;

export interface IFormField {
  name: keyof TPotentialStudentForm;
  label?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiline?: boolean;
  secureTextEntry?: boolean;
}
