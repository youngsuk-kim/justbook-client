import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  CardMedia,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import dataList from "../data/data.json";
import { Divide } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  introdImg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2039&q=80')`,
    height: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bookContainer: {
    paddingTop: theme.spacing(3),
  },
  bookTitle: {
    fontWeight: 800,
    marginBottom: theme.spacing(2),
    fontSize: "1.5rem",
  },
  card: {
    maxWidth: "198px",
  },
  media: {
    backgroundSize: "150px 200px",
    height: 260,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
  },
  money: {
    color: "#a00037",
  },
  cartBtn: {
    width: "100%",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.introdImg} />
      <Container maxWidth="lg" className={classes.bookContainer}>
        <Typography varient="h5" className={classes.bookTitle}>
          인기있는 책 (평점 기준)
        </Typography>
        <Grid container spacing={3}>
          {dataList.map((data) => (
            <Grid item xs={6} sm={3} md={2}>
              <Card>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={data.image} />
                    <CardContent>
                      <Typography gutterBottom noWrap={true}>
                        {data.title}
                      </Typography>
                      <Typography gutterBottom>김승호</Typography>
                      <Typography className={classes.money}>
                        10,000원
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      className={classes.cartBtn}
                    >
                      장바구니 등록
                    </Button>
                  </CardActions>
                </Card>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
