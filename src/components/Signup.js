import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Signup({ touched, errors }) {
  return (
    <Form className="form">
      <h1>SIGN UP</h1>
      <div className="form-group">
        <label className="label">UserName: </label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
        <p>{touched.password && errors.password}</p>
      </div>
      <button type="submit" className="btn">
        Sign Up &rarr;
      </button>
    </Form>
  );
}
export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(4)
      .required()
  }),
  handleSubmit(values, formikBag) {
    const url = "http://localhost:3300/api/auth/register";
    axios
      .post(url, values)
      .then(res => {
        localStorage.setItem("token", res.data.password);
        formikBag.props.history.push("/login");
      })
      .catch(e => {
        console.log(e.response);
      });
  }
})(Signup);
