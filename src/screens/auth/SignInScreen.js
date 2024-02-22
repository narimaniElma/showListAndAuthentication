import { useState, memo } from "react";

import { CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    //validate user

    navigation.navigate("Home");
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
      <CustomInput
        placeholder="Username"
        valu={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        type="password"
        valu={password}
        setValue={setPassword}
      />
      <CustomBtn text="Sign in" onPress={onSignInPressed} mb='0'/>

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

export default memo(SignInScreen);
