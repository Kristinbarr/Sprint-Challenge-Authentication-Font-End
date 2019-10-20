import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login({ touched, errors }) {
  return (
    <Form className="form">
      <h1>LOGIN</h1>
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
        Submit &rarr;
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
    const url = "http://localhost:3300/api/auth/login";
    axios
      .post(url, values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        formikBag.props.history.push("/jokes");
      })
      .catch(e => {
        console.log(e.response);
      });
  }
})(Login);
