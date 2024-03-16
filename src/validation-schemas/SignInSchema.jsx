import { object, string } from "yup";

const SignInSchema = object({
  email: string().email().required('*Email must be required'),
  password: string()
    .min(6, "password must be at least 6 characters long")
    .required("* Password must be required"),
});

export default SignInSchema;
