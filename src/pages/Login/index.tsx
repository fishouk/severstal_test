import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as yup from "yup";

import { signInUserAction } from "@components/Redux/Actions/authenticationActions";

import CustomInput from "@components/CustomInput";

import { FormSignin } from "./styles";

interface LoginStateProps {
  login: {
    success: string;
    message: string;
  };
}

const Login: React.FC = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    userLogin: yup.string().required("Login is required"),
    userPassword: yup.string().required("Password is required"),
  });
  const response = useSelector((state: LoginStateProps) => state.login);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const pushToProfilePage = () => {
    history.push("/profile");
  };

  useEffect(() => {
    if (localStorage.getItem("signIn") === "true") {
      pushToProfilePage();
    }
  }, []);

  const _helperSignIn = (data) => {
    dispatch(signInUserAction(data));

    if (response && response[0]?.success === "true") {
      localStorage.setItem("signIn", "true");
      pushToProfilePage();
    }
  };

  return (
    <div className="text-center">
      <FormSignin className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <CustomInput
          label={"Login"}
          defaultValue={""}
          type="text"
          name={"userLogin"}
          register={register("userLogin")}
          placeholder={"JohnDoe"}
          errors={errors}
          autoFocus
        />
        <CustomInput
          label={"Passsword"}
          defaultValue={""}
          type="password"
          name={"userPassword"}
          register={register("userPassword")}
          placeholder={"Password"}
          errors={errors}
          autoFocus
        />

        <button
          className="mt-4 btn btn-lg btn-dark btn-block"
          onClick={handleSubmit((data) => _helperSignIn(data))}
        >
          Sign in
        </button>
      </FormSignin>
    </div>
  );
};

export default Login;
