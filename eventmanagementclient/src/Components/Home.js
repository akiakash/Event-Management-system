import React from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { Container } from "@mui/material";
import Slider from "react-slick";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 2) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div>
      <NavBar />
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="./Assets/Images/Slider01.jpeg"
              alt="Slider"
              width="100%"
              height="600px"
            />
          </div>
          <div>
            <img
              src="./Assets/Images/Slider02.jpeg"
              alt="Slider"
              width="100%"
              height="600px"
            />
          </div>
          <div>
            <img
              src="./Assets/Images/Slider03.jpeg"
              alt="Slider"
              width="100%"
              height="600px"
            />
          </div>
        </Slider>
      </div>
      <Container>
        <div>
          <center>
            <h1>Travel Aspire in Sri lanka</h1>
          </center>
          <p>
            “Aspire Travel”, we are delighted to welcome you into our homes
            found on the entertaning needs you want and everywhere else in
            between. Our legendary hospitality is one that we are truly offer
            you, Wherever you may touch paths with us on your furthest
            adventures. And, although our home has fascinating origins, it is
            also an unique habitat that we work hard to protect for the future.
          </p>
        </div>
        <div>
          <center>
            <h1>We are here for you.....</h1>
          </center>
          <div class="layout">
            <div class="col col-main">
              <img
                src="./Assets/Images/SriLanka.png"
                width="100%"
                height="600px"
              />
            </div>
            <div class="col col-complementary" role="complementary">
              <img
                src="./Assets/Images/SriLanka.png"
                width="100%"
                height="600px"
              />
            </div>
          </div>
        </div>
        <div>
          <center>
            <h1>Covid -19 Guidelines.....</h1>
          </center>
          <div class="layout">
            <div class="col col-main">
              <img src="./Assets/Images/covid.png" width="80%" height="400px" />
            </div>
            <div class="col col-complementary">
              <p
                style={{
                  borderColor: "#000",
                  border: "3px solid",
                  borderRadius: 10,
                }}
              >
                <div style={{ margin: "50px" }}>
                  With insights on how the virus spreads and precautionary
                  measures that you should practice, here are some detailed
                  guides to help you overcome the prevalent COVID 19 pandemic
                  situation without any hindrances.
                </div>
              </p>
            </div>
          </div>
          <div>
            <h2>For you...</h2>
            <div>
              <Slider {...settings2}>
                <div>
                  <img
                    src="./Assets/Images/slider_2_1.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_2.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_3.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_4.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_5.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_6.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_1.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_2.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <img
                    src="./Assets/Images/slider_2_3.jpeg"
                    alt="Slider"
                    width="300px"
                    height="300px"
                    style={{ borderRadius: 10 }}
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div>
            <h2>Popular Packages...</h2>
            <ImageList
              sx={{ width: "100%", height: 600 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
