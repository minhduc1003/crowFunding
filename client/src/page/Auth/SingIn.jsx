import React, { useEffect } from "react";
import LayoutAuthentication from "../../layout/LayoutAuthentication";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Label from "../../components/Label";
import CheckBox from "../../components/CheckBox";
import Submit from "../../components/Submit";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/auth/auth-slice";
const SingIn = () => {
  const dispatch = useDispatch();
  const regex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  const schema = yup.object({
    email: yup
      .string()
      .matches(regex, "Please wirte correct form by email")
      .required("please enter your Email"),
    password: yup
      .string()
      .min(8, "Password must be 8 character ")
      .required("Please enter your password"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  function handleSignIn(value) {
    console.log(value);
    dispatch(authLogin(value));
  }
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
  }, [user]);
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mt-5 lg:mt-10 text-xs lg:text-sm text-text3 text-center ">
        Dont have an account?
        <Link to={"/sign-up"} className="text-primary">
          {" "}
          Sign up
        </Link>
      </p>
      <Link className="inline-block border border-solid border-strock dark:border-darkStroke mt-6 lg:mt-3 w-full rounded-lg mx-auto ">
        <div className=" flex gap-2  my-3 mx-auto w-fit ">
          <img
            src="./Google.png"
            alt=""
            className="w-[24px] h-[24px] object-cover"
          />
          <span className="font-medium text-base dark:text-white">
            Sign up with google
          </span>
        </div>
      </Link>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Label
          type={"text"}
          placeholder={
            errors.email?.message ? errors.email?.message : "example@gmail.com"
          }
          name={"email"}
          label={"Email *"}
          control={control}
          className={
            errors.email?.message ? "!border-error placeholder:text-error" : ""
          }
        ></Label>
        <Label
          type={"password"}
          name={"password"}
          label={"Password *"}
          placeholder={
            errors.password?.message
              ? errors.password?.message
              : "Enter a password"
          }
          control={control}
          className={
            errors.password?.message
              ? "!border-error placeholder:text-error"
              : ""
          }
        ></Label>
        <Link
          to={"/forgotPassword"}
          className="w-full flex justify-end text-primary my-4 text-sm"
        >
          Forgot password
        </Link>
        {/* <Submit type={"submit"} content={"Create my account"}></Submit> */}
        <Button kind={"primary"} className={"w-full"}>
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SingIn;
