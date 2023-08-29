// import {
//   Title,
//   Grid,
//   Card,
//   Badge,
//   Group,
//   Space,
//   Divider,
//   Button,
// } from "@mantine/core";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function TVshow() {
//   const [tvshows, setTvshow] = useState([]);
//   const [tvshowAPI, settvshowAPI] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/tvshows")
//       .then((response) => {
//         setTvshow(response.data);
//         settvshowAPI(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const filterTVshow = (genre = "") => {
//     if (genre !== "") {
//       const newTvshow = tvshowAPI.filter((tvShow) =>
//         tvShow.genres.includes(genre)
//       );
//       setTvshow(newTvshow);
//     } else {
//       setTvshow(tvshowAPI);
//     }
//   };

//   return (
//     <>
//       <Space h="30px" />
//       <Divider />
//       <Space h="30px" />
//       <Title order={3} align="center">
//         TVshow
//       </Title>
//       <Space h="30px" />
//       <Group>
//         <Button
//           onClick={() => {
//             filterTVshow("");
//           }}
//         >
//           All
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Action");
//           }}
//         >
//           Action
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Adventure");
//           }}
//         >
//           Adventure
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Drama");
//           }}
//         >
//           Drama
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Comedy");
//           }}
//         >
//           Comedy
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Sci-Fi");
//           }}
//         >
//           Sci-Fi
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Thriller");
//           }}
//         >
//           Thriller
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Fantasy");
//           }}
//         >
//           Fantasy
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Horror");
//           }}
//         >
//           Horror
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Crime");
//           }}
//         >
//           Crime
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Mystery");
//           }}
//         >
//           Mystery
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("Biography");
//           }}
//         >
//           Biography
//         </Button>
//         <Button
//           onClick={() => {
//             filterTVshow("History");
//           }}
//         >
//           History
//         </Button>
//       </Group>
//       <Space h="30px" />
//       <Grid>
//         {tvshows
//           ? tvshows.map((tvShow) => {
//               return (
//                 <Grid.Col key={tvShow.id} span={4}>
//                   <Card withBorder shadow="sm" p="20px">
//                     <Title order={5}>{tvShow.title}</Title>
//                     <Space h="20px" />
//                     <Group position="center">
//                       <Badge
//                         variant="gradient"
//                         gradient={{ from: "blue", to: "red" }}
//                       >
//                         {tvShow.creator}
//                       </Badge>

//                       {tvShow.genre.map((genre) => (
//                         <Badge
//                           key={genre}
//                           variant="gradient"
//                           gradient={{ from: "teal", to: "blue", deg: 60 }}
//                         >
//                           {genre}
//                         </Badge>
//                       ))}

//                       <Badge
//                         variant="gradient"
//                         gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
//                       >
//                         {tvShow.rating}
//                       </Badge>
//                     </Group>
//                   </Card>
//                 </Grid.Col>
//               );
//             })
//           : null}
//       </Grid>
//     </>
//   );
// }

// export default TVshow;

import { useState, useEffect } from "react";
import axios from "axios";
import { Title, Grid, Card, Badge, Group, Space, Button } from "@mantine/core";

function Tvshows() {
  const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tvshows")
      .then((response) => {
        setTvshows(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterTvshow = async (genre = "") => {
    try {
      const response = await axios.get("http://localhost:5000/tvshows?genre=" + genre);
      setTvshows(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Space h="20px" />
      <Title order={3} align="center">
        TV Shows
      </Title>
      <Space h="20px" />
      <Group position="center">
        <Button
          onClick={() => {
            filterTvshow("");
          }}
        >
          All
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Drama");
          }}
        >
          Drama
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Fantasy");
          }}
        >
          Fantasy
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Action");
          }}
        >
          Action
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Crime");
          }}
        >
          Crime
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Crime");
          }}
        >
          Crime
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Adventure");
          }}
        >
          Adventure
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Adventure");
          }}
        >
          Adventure
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Biography");
          }}
        >
          Biography
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Horror");
          }}
        >
          Horror
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Sci-Fi");
          }}
        >
          Sci-Fi
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Comedy");
          }}
        >
          Comedy
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Mystery");
          }}
        >
          Mystery
        </Button>
        <Button
          onClick={() => {
            filterTvshow("Thriller");
          }}
        >
          Thriller
        </Button>
      </Group>
      <Space h="20px" />
      <Grid>
        {tvshows
          ? tvshows.map((tvshow) => {
              return (
                <Grid.Col key={tvshow._id} span={4}>
                  <Card withBorder shadow="sm">
                    <Title order={5}>{tvshow.title}</Title>
                    <Space h="20px" />
                    <Group position="center" spacing="5px">
                      <Badge
                        variant="gradient"
                        gradient={{ from: "blue", to: "red" }}
                      >
                        {tvshow.creator}
                      </Badge>
                      {tvshow.genre.map((genre) => (
                        <Badge
                          key={genre}
                          variant="gradient"
                          gradient={{ from: "teal", to: "blue", deg: 60 }}
                        >
                          {genre}
                        </Badge>
                      ))}
                      <Badge
                        variant="gradient"
                        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
                      >
                        {tvshow.rating}
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

export default Tvshows;
