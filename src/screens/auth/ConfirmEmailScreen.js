import { useState } from "react";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const ConfirmEmailScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    navigation.navigate("Home");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onResendPressed = () => {
    console.warn("onResendPressed");
  };

  return (
    <MainLayout Scrollable>
      <Title text="Confirm your email" />

      <CustomInput
        placeholder="Enter your confirmation code"
        valu={code}
        setValue={setCode}
      />

      <CustomBtn text="Confirm" onPress={onConfirmPressed} />

      <CustomBtn
        text="Resend code"
        variant="outline"
        onPress={onResendPressed}
      />
      <CustomBtn
        text="Back to Sign in"
        variant="outline"
        onPress={onSignInPressed}
      />
    </MainLayout>
  );
};

export default ConfirmEmailScreen;
