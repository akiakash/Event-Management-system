import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Flight() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <NavBar />
      <Container>
        <div className="row">
          <Card sx={{ maxWidth: 340 }} style={{ margin: 20 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Colombo All airports (CMB) -- Mumbai Chhatrapati S. Maharaj
                (BOM) <br />
                9:30AM - 11:30AM
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Colombo - Mumbai Saturday 22 January 2022 <br />
                  |<br />|
                </Typography>
                <Typography paragraph>
                  Mumbai - Colombo Saturday 25 January 2022
                  <br />
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card sx={{ maxWidth: 340 }} style={{ margin: 20 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Colombo All airports (CMB) -- Mumbai Chhatrapati S. Maharaj
                (BOM) <br />
                9:30AM - 11:30AM
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Colombo - Mumbai Saturday 22 January 2022 <br />
                  |<br />|
                </Typography>
                <Typography paragraph>
                  Mumbai - Colombo Saturday 25 January 2022
                  <br />
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card sx={{ maxWidth: 340 }} style={{ margin: 20 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Colombo All airports (CMB) -- Mumbai Chhatrapati S. Maharaj
                (BOM) <br />
                9:30AM - 11:30AM
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Colombo - Mumbai Saturday 22 January 2022 <br />
                  |<br />|
                </Typography>
                <Typography paragraph>
                  Mumbai - Colombo Saturday 25 January 2022
                  <br />
                </Typography>
              </CardContent>
            </Collapse>
            <center>
              <Button href="/FlightBook">Book Now</Button>
            </center>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Flight;
