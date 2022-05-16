import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import background from "./hotelbg.jpg";

function Hotel() {
  const [HotelDetails, setHotelDetails] = useState();
  axios
    .get(`http://localhost:3000/HotelManagement`)
    .then((res) => {
      console.log(res.data);
      setHotelDetails(res.data);
    })
    .catch((error) => {
      console.log(error.data);
    });

  const HotelBooking = (details) => {
    window.sessionStorage.setItem("SingleHotel", JSON.stringify(details));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <div
          class="row"
          // style={{
          //   backgroundImage: `url(${background})`,
          //   width: "50vw",
          //   height: "100vh",
          // }}
        >
          {HotelDetails
            ? HotelDetails.map((item) => (
                <div class="column">
                  <div class="card">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.Image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.Address} {item.Street} {item.State}{" "}
                          {item.Province} {item.Country}
                          <br />
                          <a
                            href="./SingleHotel"
                            onClick={() => HotelBooking(item)}
                          >
                            More details...
                          </a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))
            : "Loading..."}

          {/* <div class="column">
            <div class="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./Assets/Images/Event01.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./Assets/Images/Event01.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./Assets/Images/Event01.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./Assets/Images/Event01.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Hotel;
