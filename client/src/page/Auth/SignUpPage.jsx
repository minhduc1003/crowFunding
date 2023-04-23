import React from "react";
import { Link } from "react-router-dom";
import Label from "../../components/Label";
import CheckBox from "../../components/CheckBox";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Submit from "../../components/Submit";
import LayoutAuthentication from "../../layout/LayoutAuthentication";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { authRegister } from "../../store/auth/auth-slice";
const SignUpPage = () => {
  const dispatch = useDispatch();
  const regex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  const schema = yup.object({
    name: yup.string().required("Please enter your full name"),
    email: yup
      .string()
      .matches(regex, "Please wirte correct form by email")
      .required("please enter your Email"),
    password: yup
      .string()
      .min(8, "Password must be 8 character ")
      .required("Please enter your password"),
    term: yup.bool().required(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const watchterm = watch("term");
  function handleSingup(value) {
    console.log(value);
    dispatch(authRegister(value));
    reset({});
  }

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mt-5 lg:mt-10 text-xs lg:text-sm text-text3 text-center ">
        Already have an account?
        <Link to={"/sign-in"} className="text-primary">
          Sign in
        </Link>
      </p>
      <Link className=" inline-block border border-solid border-strock dark:border-darkStroke mt-6 lg:mt-3 w-full rounded-lg mx-auto">
        <div className="flex gap-2  my-3 mx-auto w-fit ">
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
      <p className="text-text2 text-center mt-5 lg:mt-3 text-xs dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSingup)}>
        <Label
          type={"text"}
          placeholder={
            errors.fullName?.message ? errors.fullName?.message : "Jone Doe"
          }
          name={"name"}
          label={"Full Name *"}
          control={control}
          className={
            errors.fullName?.message
              ? "border-error placeholder:text-error"
              : ""
          }
        ></Label>
        <Label
          type={"text"}
          placeholder={
            errors.email?.message ? errors.email?.message : "example@gmail.com"
          }
          name={"email"}
          label={"Email *"}
          control={control}
          className={
            errors.email?.message ? "border-error placeholder:text-error" : ""
          }
        ></Label>
        <Label
          type={"password"}
          name={"password"}
          label={"Password *"}
          placeholder={
            errors.password?.message
              ? errors.password?.message
              : "Create a password"
          }
          control={control}
          className={
            errors.password?.message
              ? "border-error placeholder:text-error"
              : ""
          }
        ></Label>
        <div className="flex my-4 mt-4 items-center ">
          <CheckBox
            on={watchterm === true}
            onClick={() => setValue("term", !watchterm)}
          ></CheckBox>
          <p className="px-4 text-text2 text-xs lg:text-sm">
            I agree to the <Link className="text-secondary">Tearms of Use</Link>
            and have read and understand the
            <Link className="text-secondary">Privacy policy</Link>.
          </p>
        </div>
        {/* <Submit type={"submit"} content={"Create my account"}></Submit> */}
        <Button kind={"primary"} className={"w-full"} type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
