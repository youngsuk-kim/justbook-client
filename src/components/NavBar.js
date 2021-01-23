import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { CssBaseline, Typography } from "@material-ui/core";
import SideBar from "./SideBar";
import Main from "./Main";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    right: 20,
    fontSize: "1.1rem",
  },
  spacer: {
    flex: "auto",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <SideBar />
          <Button
            color="main"
            className={classes.title}
            variant="button"
            href="/"
          >
            책과함께
          </Button>
          <div className={classes.spacer} />
          <Button color="main" href="/login">
            <Typography>장바구니</Typography>
          </Button>
          <Button color="main" href="/login">
            <Typography>로그인</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Main />
    </div>
  );
};

export default NavBar;
