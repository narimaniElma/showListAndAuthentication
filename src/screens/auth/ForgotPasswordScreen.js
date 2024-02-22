import { useState, memo } from "react";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const ForgotPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <MainLayout Scrollable>
      <Title text="Reset your password" />

      <CustomInput
        placeholder="Username"
        valu={username}
        setValue={setUsername}
      />
     
      <CustomBtn text="Send" onPress={onSendPressed} />

      <CustomBtn
        text='Back to Sign in'
        variant="outline"
        onPress={onSignInPressed}
      />

    </MainLayout>
  );
};

export default memo(ForgotPasswordScreen);
