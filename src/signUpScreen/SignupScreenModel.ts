import * as yup from 'yup';

export interface SignUpFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}
export default class SignUpScreenModel {
  private readonly validationSchema: yup.ObjectSchema<SignUpFormData>;
  constructor() {
    this.validationSchema = yup.object().shape({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      phoneNumber: yup.string().required('Required'),
      address: yup.string().required('Required'),
    });
  }
  getValidationSchema(): yup.ObjectSchema<SignUpFormData> {
    return this.validationSchema;
  }
}
