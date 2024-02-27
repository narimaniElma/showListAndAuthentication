import { memo } from "react";
import { Text } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";
import { AuthIcon } from "../../icons";

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

  const InputController = ({ name, placeholder, inputLeftElement}) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder={placeholder}
            onChangeText={onChange}
            errorMessage={errors.name?.message}
            InputLeftElement={inputLeftElement}
          />
        )}
      />
    );
  };

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

      <InputController name="username" placeholder="Username" InputLeftElement={<AuthIcon name="person" />} />
      <InputController name="email" placeholder="Email" InputLeftElement={<AuthIcon name="email" />} />
      <InputController name="password" placeholder="Password" />
      <InputController name="password_confirm" placeholder="Reoeat Password" />

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
{/* 
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
      /> */}

      <CustomBtn
        text="Have an account? Sign in"
        onPress={onSignInPressed}
        link
      />
    </MainLayout>
  );
};

export default memo(SignUpScreen);
