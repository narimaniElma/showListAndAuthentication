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
  const invalid = !!errorMessage || isInvalid
  
  return (
            <FormControl isInvalid={invalid} mb={mb}>
              <FormControl.Label
                mt="0"
                _text={{
                  fontSize: 14,
                  color: "primary.500",
                  fontWeight: "600",
                }}
              >
                {label}
              </FormControl.Label>
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
                _focus={{
                  bg: "primary.300",
                  borderColor: "primary.400",
                }}
                {...rest}
              />
                <FormControl.ErrorMessage>
                  {errorMessage }
                </FormControl.ErrorMessage>
            </FormControl>
  );
};

export default CustomInput;
