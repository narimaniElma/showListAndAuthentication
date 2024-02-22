import {Heading} from 'native-base';

const Title = ({text, color = '#313131', fontWeight = 600, fontSize = 24, mb = '6'}) => {
  return (
    <Heading mb={mb} fontSize={fontSize} color={color} fontWeight={fontWeight} mx='auto'>
      {text}
    </Heading>
  );
};

export default Title;