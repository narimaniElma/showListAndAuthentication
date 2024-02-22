import { Text } from 'react-native';

const CustomText = ({text, color="gray.700", fontSize=12}) => (
    <Text color={color} fontSize={fontSize}>
    {text}
  </Text>
);

export default CustomText;