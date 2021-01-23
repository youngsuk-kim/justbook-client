import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    page: Home,
    exact: true,
  },
  {
    path: "/login",
    page: Login,
  },
  {
    path: "/register",
    page: Register,
  },
];

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.page />}
          />
        ))}
      </Switch>
    </main>
  );
};

export default Main;
