import { object, ref, string } from "yup";

const SignUpSchema = object({
  full_name: string().required("*Full name must be required"),
  email: string().email().required('*Email must be required'),
  password1: string()
    .min(6, "password must be at least 6 characters long")
    .required("* Password must be required"),
  password2: string().required().oneOf([ref('password1'), null], '*Password must match'),
});

export default SignUpSchema;
