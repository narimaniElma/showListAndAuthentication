// import { useState, memo } from "react";
import { Text } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const schemaValidations = yup.object({
  username: yup
    .string()
    .required("Username is required."),
  email: yup.string().required("Email is required.").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters"),
  password_confirm: yup
    .string()
    .required("Confirmation password is required.")
    .oneOf([yup.ref("password"), null], "Must be equal to Password."),
});

const SignUpScreen = ({ navigation }) => {
const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });

  const onRegisterPressed = (data) => {
    console.log(data);

    navigation.navigate("ConfirmEmail");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };

  return (
    <MainLayout Scrollable>
      <Title text="Create an account" />

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
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <CustomInput placeholder="Email" onChangeText={onChange} errorMessage={errors.email?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder="Password"
            onChangeText={onChange}
            secureTextEntry
            errorMessage={errors.password?.message}
            mb="5"
          />
        )}
      />
      <Controller
        control={control}
        name="password_confirm"
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder="Reoeat Password"
            onChangeText={onChange}
            secureTextEntry
            errorMessage={errors.password_confirm?.message}
            mb="5"
          />
        )}
      />

      <CustomBtn text="Register" onPress={handleSubmit(onRegisterPressed)} mb="2" />

      <Text color="gray.500" mb="10">
        By registering, you confirm that you accept our{" "}
        <Text color="secondary" onPress={onTermsOfUsePressed}>
          Terms of Use
        </Text>
        and{" "}
        <Text color="secondary" onPress={onPrivacyPressed}>
          Privacy Policy
        </Text>
      </Text>

      <CustomBtn
        text="Sign in with google"
        variant="outline"
        onPress={onSignInGoogle}
        mb="5"
      />
      <CustomBtn
        text="Sign in with facebook"
        variant="outline"
        onPress={onSignInFacebook}
      />

      <CustomBtn
        text="Have an account? Sign in"
        onPress={onSignInPressed}
        link
      />
    </MainLayout>
  );
};

export default SignUpScreen;
