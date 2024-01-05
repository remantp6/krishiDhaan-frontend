import { object, string } from "yup";

const SignUpSchema = object({
  full_name: string().required("*Full name must be required"),
  email: string().email().required('*Email must be required'),
  password: string()
    .min(6, "password must be at least 6 characters long")
    .required("* Password must be required"),
});

export default SignUpSchema;
