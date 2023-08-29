import {
  Title,
  Grid,
  Card,
  Badge,
  Group,
  Space,
  Divider,
  Button,
} from "@mantine/core";
import { useState, useEffect } from "react";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);

  const filterMovie = async (genre = "") => {
    try {
      const response = await axios.get("http://localhost:5000/movies" + genre);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title order={3} align="center">
        Movies
      </Title>
      <Space h="30px" />'
      <Group>
        <Button
          onClick={() => {
            filterMovie("Drama");
          }}
        >
          Drama
        </Button>
        <Button
          onClick={() => {
            filterMovie("Fantasy");
          }}
        >
          Fantasy
        </Button>
        <Button
          onClick={() => {
            filterMovie("Action");
          }}
        >
          Action
        </Button>
        <Button
          onClick={() => {
            filterMovie("Sci-Fi");
          }}
        >
          Sci-fi
        </Button>
        <Button
          onClick={() => {
            filterMovie("");
          }}
        >
          All
        </Button>
      </Group>
      <Space h="30px" />
      <Grid>
        {movies
          ? movies.map((movie) => {
              return (
                <Grid.Col key={movie.id} span={4}>
                  <Card withBorder shadow="sm" p="20px">
                    <Title order={5}>{movie.title}</Title>
                    <Space h="20px" />
                    <Group position="center">
                      <Badge
                        variant="gradient"
                        gradient={{ from: "blue", to: "red" }}
                      >
                        {movie.director}
                      </Badge>
                      <Badge
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 60 }}
                      >
                        {movie.genre}
                      </Badge>
                      <Badge
                        variant="gradient"
                        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
                      >
                        {movie.rating}
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

export default Movies;
