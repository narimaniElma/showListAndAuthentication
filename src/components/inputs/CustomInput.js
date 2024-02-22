import {Input, FormControl} from 'native-base';

const CustomInput = ({
  label,
  type,
  value,
  setValue,
  isInvalid,
  onBlur,
  placeholder = 'placeholder',
  errorMsg,
  mb = 5,
  width = '100%',
  src,
}) => {
  return (
      <FormControl isInvalid={isInvalid} mb={mb}>
        <FormControl.Label
          mt="0"
          _text={{fontSize: 14, color: 'primary.500', fontWeight: '600'}}>
          {label}
        </FormControl.Label>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          onChangeText={setValue}
          onBlur={onBlur}
          InputLeftElement={src}
          width={width}
          borderRadius="6"
          fontSize="14"
          py="2.5"
          pl="2"
        />
        <FormControl.ErrorMessage>{errorMsg}</FormControl.ErrorMessage>
      </FormControl>
  );
};

export default CustomInput;
