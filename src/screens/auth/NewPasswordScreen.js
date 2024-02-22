import { useState } from "react";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const NewPasswordScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <MainLayout Scrollable>
      <Title text="Reset your password" />

      <CustomInput
        placeholder="Code"
        valu={code}
        setValue={setCode}
      />
      <CustomInput
        placeholder="Enter your new password"
        valu={newPassword}
        setValue={setNewPassword}
        mb='10'
      />
     
      <CustomBtn text="Submit" onPress={onSubmitPressed} />

      <CustomBtn
        text='Back to Sign in'
        variant="outline"
        onPress={onSignInPressed}
      />

    </MainLayout>
  );
};

export default NewPasswordScreen;
