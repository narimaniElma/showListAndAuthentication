// import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const schemaValidations = yup.object({
  code: yup.string().required("Code is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters"),
});

const NewPasswordScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });

  const onSubmitPressed = (data) => {
    console.log(data);

    navigation.navigate("Home");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <MainLayout Scrollable>
      <Title text="Reset your password" />

      <Controller
        control={control}
        name="code"
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder="Code"
            onChangeText={onChange}
            errorMessage={errors.code?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder="Enter your new password"
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            mb="10"
          />
        )}
      />

      <CustomBtn text="Submit" onPress={handleSubmit(onSubmitPressed)} />

      <CustomBtn
        text="Back to Sign in"
        variant="outline"
        onPress={onSignInPressed}
      />
    </MainLayout>
  );
};

export default NewPasswordScreen;
