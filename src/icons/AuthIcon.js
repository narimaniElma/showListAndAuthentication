import { Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const AuthIcon = ({name}) => {
  return (
    <Icon
      as={<MaterialIcons name={name} />}
      size={5}
      ml="2"
      color="primary.400"
    />
  );
};

export default AuthIcon;
