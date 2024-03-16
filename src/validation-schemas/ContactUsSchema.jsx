import { object, string } from "yup";

const ContactUsSchema = object({
  name: string().required("*Full name must be required"),
  email: string().email().required('*Email must be required'),
  phone: string()
    .min(9, "* Phone number must be at least 9 digits")
    .max(14, "Phone number should only have maximum 14 digits")
    .required("* Password must be required"),
  message: string().required("* Please write your message"),
});

export default ContactUsSchema;
