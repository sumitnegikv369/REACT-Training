import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { SignupSchema } from "./SignupSchema";

const Validation = () => {
  const initialValues = {
    UserName: "",
    Email: "",
    PhoneNo: "",
    Password: "",
    ConfirmPassword: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <TextField
            label="Username"
            variant="filled"
            value={values.UserName}
            name="UserName"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.UserName && touched.UserName ? (
            <p>{errors.UserName}</p>
          ) : null}
        </div>
        <div>
          <TextField
            label="Email"
            variant="filled"
            value={values.Email}
            name="Email"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Email && touched.Email ? <p>{errors.Email}</p> : null}
        </div>
        <div>
          <TextField
            label="PhoneNumber"
            variant="filled"
            value={values.PhoneNo}
            name="PhoneNo"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.PhoneNo && touched.PhoneNo ? <p>{errors.PhoneNo}</p> : null}
        </div>
        <div>
          <TextField
            label="Password"
            variant="filled"
            type="password"
            value={values.Password}
            name="Password"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Password && touched.Password ? (
            <p>{errors.Password}</p>
          ) : null}
        </div>
        <div>
          <TextField
            label="ConfirmPassword"
            type="password"
            variant="filled"
            value={values.ConfirmPassword}
            name="ConfirmPassword"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.ConfirmPassword && touched.ConfirmPassword ? (
            <p>{errors.ConfirmPassword}</p>
          ) : null}
        </div>
        <Button variant="outlined" type="submit">
          SUBMIT
        </Button>
      </div>
    </form>
  );
};

export default Validation;