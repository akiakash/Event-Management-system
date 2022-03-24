import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventIcon from "@mui/icons-material/Event";

function Event() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <img
            src="./Assets/Images/EventBackground.png"
            alt="Image"
            width={"100%"}
            height={"500px"}
          />
        </div>
        <Container>
          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <div class="row">
              <div class="column">
                <div class="card">
                  <a href="/SingleEvent">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="./Assets/Images/Event01.webp"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{ textDecoration: "none" }}
                        >
                          Sid sriram music cocert
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <div style={{ textDecoration: "none" }}>
                            <LocationOnIcon />
                            Colombo
                          </div>
                          <div>
                            <AttachMoneyIcon /> 120
                          </div>
                          <div>
                            <EventIcon />
                            2022.04.23
                          </div>
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
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
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Event;
