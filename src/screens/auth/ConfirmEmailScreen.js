import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title, CustomInput, CustomBtn } from "../../components";
import { MainLayout } from "../../layout";

const schemaValidations = yup.object({
  code: yup.string().required("Code is required."),
});

const ConfirmEmailScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });

  const onConfirmPressed = (data) => {
    console.log(data);

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

      <Controller
        control={control}
        name="code"
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder="Enter your confirmation code"
            onChangeText={onChange}
            errorMessage={errors.code?.message}
          />
        )}
      />

      <CustomBtn text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

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
