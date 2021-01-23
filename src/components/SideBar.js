import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  function toggleDrawer() {
    setOpen(!open);
  }

  const sidebarList = (
    <div>
      <List>
        <ListItem button key={"category"}>
          <ListItemText primary={"책 카테고리"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {sidebarList}
      </Drawer>
    </div>
  );
}
