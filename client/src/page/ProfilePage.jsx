import React from "react";
import Heading from "../components/common/Heading";
import FormRow from "../components/common/FormRow";
import Label from "../components/Label";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

const ProfilePage = () => {
  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
    control,
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  return (
    <div className="max-w-[800px] w-full mx-auto mt-10 ">
      <Heading className="!text-2xl">Account Information</Heading>
      <p className="text-text3 mt-5 text-sm">Update your account information</p>
      <form className="mt-11" action="">
        <Heading>Personal Information</Heading>
        <FormRow>
          <Label
            label={"Full name"}
            placeholder={"Your full name"}
            control={control}
            name={"name"}
          ></Label>
          <Label
            label={"Date of Birth"}
            placeholder={"Date of Birth"}
            control={control}
            name={"DateOfBirth"}
          ></Label>
          <Label
            label={"Mobile Number"}
            placeholder={"Mobile Number"}
            control={control}
            name={"MobileNumber"}
          ></Label>
        </FormRow>
        <Heading className="mt-10">Credentials</Heading>
        <FormRow>
          <Label
            label={"Email"}
            placeholder={"Your email"}
            control={control}
            name={"Email"}
          ></Label>
          <Label
            label={"Password"}
            placeholder={"Edit your password"}
            control={control}
            name={"Password"}
          ></Label>
        </FormRow>
        <Button kind="primary" className={"w-full mt-8"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
