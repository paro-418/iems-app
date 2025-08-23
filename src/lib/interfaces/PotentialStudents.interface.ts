import { KeyboardTypeOptions, TextStyle, ViewStyle } from 'react-native';
import z from 'zod';
import { PotentialStudentFormSchema } from '../schema/PotentialStudentFormSchema.schema';
import { Control } from 'react-hook-form';

export const interestedCoursesNames = ['all', 'PGDIS', 'PGDEM'] as const;

export type interestedCoursesNameTypes =
  (typeof interestedCoursesNames)[number];

// export interface IPotentialStudents {
//   name: string;
//   email: string;
//   phoneNo: string;
//   inquiryText?: string;
//   interestedCourse?: interestedCoursesNameTypes;
// }

export type TPotentialStudentForm = z.input<typeof PotentialStudentFormSchema>;

export interface IFormFieldBase {
  name: keyof TPotentialStudentForm;
  label?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiline?: boolean;
  secureTextEntry?: boolean;
}
export interface ISelectOption {
  label: string;
  value: TPotentialStudentForm['interestedCourse'];
}

export interface IFormField extends IFormFieldBase {
  component?: 'text' | 'select';
  options?: ISelectOption[];
  styles: {
    inputContainer: ViewStyle;
    label: TextStyle;
    input: TextStyle;
    inputError: TextStyle;
    multilineInput: TextStyle;
    errorText: TextStyle;
  };
  form: {
    control: Control<TPotentialStudentForm>;
  };
}
