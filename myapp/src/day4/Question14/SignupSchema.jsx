import * as Yup from "yup";
export const SignupSchema = Yup.object({
  UserName: Yup.string()
    .min(2, "Too short")
    .max(25, "Too Long,Give shorter name")
    .required("Please enter your name"),
  Email: Yup.string().email().required("Please Enter Email"),
  PhoneNo: Yup.string()
    .min(10, "Phone number must be exactly 10 digits")
    .required("Please Enter correct Phone Number")
    .max(10, "Phone number must be exactly 10 digits"),
  Password: Yup.string().min(8).required("Should be min 8 characters"),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Password must match"),
});