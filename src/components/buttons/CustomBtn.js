import { Button } from "native-base";

const CustomBtn = ({
  text,
  width = "full",
  onPress,
  mb = "5",
  py = 4,
  link = false,
  background = "primary.500",
  variant,
}) => (
  <Button
    bg={link || variant == "outline" ? "transparent" : background}
    borderColor={variant == "outline" ? "primary.500" : ''}
    width={link ? "" : width}
    size="lg"
    mb={mb}
    py = { variant == "outline" ? '3' : link ? '1' : py}
    pl={link ? 0 : ''}
    rounded="md"
    onPress={onPress}
    _text={{
      color: link || variant == "outline" ? "primary.500" : "white",
      fontWeight: "600",
      fontSize: "16",
    }}
    variant={variant}
    _pressed={{
      background: variant == "outline" ? "primary.500" : link ? '' : "primary.400",
      color: link ? "primary.200" : "white",   
    }}
  >
    {text}
  </Button>
);

export default CustomBtn;
