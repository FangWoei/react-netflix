import { Title, Grid, Card, Badge, Group, Space, Divider } from "@mantine/core";
import { useState, useEffect } from "react";
import axios from "axios";

function TVshow() {
  const [tvshows, setTvshow] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tvshows")
      .then((response) => {
        setTvshow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Space h="30px" />
      <Divider />
      <Space h="30px" />
      <Title order={3} align="center">
        TVshow
      </Title>
      <Space h="30px" />
      <Divider />
      <Space h="30px" />
      <Grid>
        {tvshows
          ? tvshows.map((tvShow) => {
              return (
                <Grid.Col key={tvShow.id} span={4}>
                  <Card withBorder shadow="sm" p="20px">
                    <Title order={5}>{tvShow.title}</Title>
                    <Space h="20px" />
                    <Group position="center">
                      <Badge
                        variant="gradient"
                        gradient={{ from: "blue", to: "red" }}
                      >
                        {tvShow.creator}
                      </Badge>
                      <Badge
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 60 }}
                      >
                        {tvShow.genre}
                      </Badge>
                      <Badge
                        variant="gradient"
                        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
                      >
                        {tvShow.rating}
                      </Badge>
                    </Group>
                  </Card>
                </Grid.Col>
              );
            })
          : null}
      </Grid>
    </>
  );
}

export default TVshow;
