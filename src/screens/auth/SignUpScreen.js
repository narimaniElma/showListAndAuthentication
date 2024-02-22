import { useState, memo } from "react";
import { Text } from "native-base";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
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

      <CustomInput
        placeholder="Username"
        valu={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" valu={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        type="password"
        valu={password}
        setValue={setPassword}
        mb="5"
      />
      <CustomInput
        placeholder="Reoeat Password"
        type="password"
        valu={passwordRepeat}
        setValue={setPasswordRepeat}
        mb="5"
      />
      <CustomBtn text="Register" onPress={onRegisterPressed} mb='2'/>

      <Text color="gray.500" mb='10'>
        By registering, you confirm that you accept our{" "}
        <Text color="secondary" onPress={onTermsOfUsePressed}>Terms of Use</Text>and{" "}
        <Text color="secondary" onPress={onPrivacyPressed}>Privacy Policy</Text>
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
        text='Have an account? Sign in'
        onPress={onSignInPressed}
        link
      />
    </MainLayout>
  );
};

export default memo(SignUpScreen);
