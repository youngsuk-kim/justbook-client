import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItemIcon: {
    color: "#ff8a80",
    display: "flex",
    justifyContent: "center",
  }
}));

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const classes = useStyles();

  function toggleDrawer() {
    setOpen(!open);
  }
  function handleClick() {
    setNavMenuOpen(!navMenuOpen);
  }

  const sidebarList = (
    <List component="nav">
      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText className={classes.listItemIcon} primary="책 카테고리" />
        {navMenuOpen ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={navMenuOpen} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText primary="Nested Page 1" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText primary="Nested Page 2" />
          </ListItem>
        </List>
      </Collapse>
    </List>
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
