import { useCallback, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";
import { AuthIcon } from "../../icons";

const schemaValidations = yup.object({
  username: yup.string().required("Username is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters"),
});

const SignInScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });
  
  const InputController = ({ name, placeholder, inputLeftElement, errorMessage}) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder={placeholder}
            onChangeText={onChange}
            errorMessage={errorMessage}
            InputLeftElement={inputLeftElement}
          />
        )}
      />
    );
  };

  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
    //validate user
  };
  const onForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };

  return (
    <MainLayout Scrollable>
      <InputController name="username" placeholder="Username" InputLeftElement={<AuthIcon name="person" />} errorMessage={errors.username?.message} />
      <InputController name="password" placeholder="Password" errorMessage={errors.password?.message} />
    

      <CustomBtn
        text="Sign in"
        onPress={handleSubmit(onSignInPressed)}
        mb="0"
      />

      <CustomBtn text="Forgot your password" link onPress={onForgotPassword} />

      {/* <CustomBtn
        text="Sign in with google"
        onPress={onSignInGoogle}
        variant="outline"
      />
      <CustomBtn
        text="Sign in with facebook"
        onPress={onSignInFacebook}
        variant="outline"
      /> */}

      <CustomBtn
        text={`Don't have an accunt? Create one`}
        onPress={onSignUpPressed}
        link
      />
    </MainLayout>
  );
};

export default memo(SignInScreen);
