// import { memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";
import { useAuth } from "../../contexts/AuthContext";

const schemaValidations = yup.object({
  username: yup.string().required("Username is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters"),
});

const SignInScreen = ({ navigation }) => {
  const {login, register} = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });

  const onSignInPressed = async (data) => {
    const result = await login(data.username, data.password);

    if (result && result.error) {
      alert(result.msg);
    } else {
      navigation.navigate("Home");
    }

    console.log(data);
  };
  const onForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    // const result = await register(data.username, data.password);

    // if (result && result.error) {
    //   alert(result.msg);
    // } else {
    //   onSignInPressed();
    //   navigation.navigate("SignUp");
    // }
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
        name="password"
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder="Password"
            onChangeText={onChange}
            secureTextEntry
            errorMessage={errors.password?.message}
          />
        )}
      />

      <CustomBtn
        text="Sign in"
        onPress={handleSubmit(onSignInPressed)}
        mb="0"
      />

      <CustomBtn text="Forgot your password" link onPress={onForgotPassword} />

      <CustomBtn
        text="Sign in with google"
        onPress={onSignInGoogle}
        variant="outline"
      />
      <CustomBtn
        text="Sign in with facebook"
        onPress={onSignInFacebook}
        variant="outline"
      />

      <CustomBtn
        text={`Don't have an accunt? Create one`}
        onPress={onSignUpPressed}
        link
      />
    </MainLayout>
  );
};

export default SignInScreen;
