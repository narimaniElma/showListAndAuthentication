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

  const InputController = ({ name, placeholder}) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <CustomInput
            placeholder={placeholder}
            onChangeText={onChange}
            errorMessage={errors.name?.message}
          />
        )}
      />
    );
  };

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

      <InputController name="code" placeholder="Enter your confirmation code" />

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
