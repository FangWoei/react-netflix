import { Container, Title, Space, Divider } from "@mantine/core";
import Movies from "./Movies";
import TVshow from "./TVshow";

function App() {
  return (
    <Container>
      <Space h="xl" />
      <div className="App">
        <Title align="center" color="red">
          Netflix
        </Title>
        <Space h="lg" />
        <Title order={2} align="center">
          The biggest local and international hits. The best stories. All
          streaming here.
        </Title>
        <Space h="30px" />
        <Divider />
        <Space h="30px" />
      </div>
      <Space h="md" />
      <Movies />
      <TVshow />
    </Container>
  );
}

export default App;
