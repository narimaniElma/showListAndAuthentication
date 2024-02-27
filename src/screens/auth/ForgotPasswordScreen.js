// import { useState, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";
import { AuthIcon } from "../../icons";

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

  const InputController = ({ name, placeholder}) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder={placeholder}
            onChangeText={onChange}
            errorMessage={errors.name?.message}
            InputLeftElement={<AuthIcon name="person" />}
          />
        )}
      />
    );
  };

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

      <InputController name="username" placeholder="Username" />
     
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
