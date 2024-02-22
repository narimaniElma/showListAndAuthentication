import { ScrollView, Container, HStack, View, Image } from "native-base";

const MainLayout = ({ children, pt = "20", Scrollable = false }) => {
  const Wrapper = () => {
    return (
      <Container flex={1} px="5" pb="10" pt={pt} maxWidth="100%">
        {children}
      </Container>
    );
  };

  return Scrollable ? (
    <ScrollView>
      <Wrapper />
    </ScrollView>
  ) : (
    <Wrapper />
  );
};

export default MainLayout;
