// import { useState, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const schemaValidations = yup.object({
  username: yup.string().required("Username is required."),
});

const ForgotPasswordScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });

  const onSendPressed = (data) => {
    console.log(data);

    navigation.navigate('NewPassword');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <MainLayout Scrollable>
      <Title text="Reset your password" />

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder="Username"
            onChangeText={onChange}
            errorMessage={errors.username?.message}
          />
        )}
      />
     
      <CustomBtn text="Send" onPress={handleSubmit(onSendPressed)} />

      <CustomBtn
        text='Back to Sign in'
        variant="outline"
        onPress={onSignInPressed}
      />

    </MainLayout>
  );
};

export default ForgotPasswordScreen;
