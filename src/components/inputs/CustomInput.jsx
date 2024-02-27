import { Input, FormControl } from "native-base";

const CustomInput = ({
  label,
  errorMessage,
  placeholder = "placeholder",
  placeholderTextColor = 'primary.400',
  mb = 5,
  bg = "primary.200",
  isInvalid,
  width = "full",
  ...rest
}) => {
  const textStyle = {
    fontSize: 14,
    color: "primary.500",
    fontWeight: "600",
  };
  const focusStyle = {
    bg: "primary.300",
    borderColor: "primary.400",
  };
  const invalid = !!errorMessage || isInvalid

  const NativeInput = () => (
    <Input
      placeholder={placeholder}
      isInvalid={invalid}
      width={width}
      bg={bg}
      borderRadius="6"
      fontSize="14"
      placeholderTextColor={placeholderTextColor}
      _invalid={{
        borderColor: "danger.500"
      }}
      _focus={focusStyle}
      {...rest}
    />
  )

  return (
    <FormControl isInvalid={invalid} mb={mb}>
      <FormControl.Label mt="0" _text={textStyle}>{label}</FormControl.Label>

      <NativeInput />

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
