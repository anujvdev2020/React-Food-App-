import {
  Navbar,
  NavItem,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [openDrawer, setDrawer] = useState(false);
  return (
    <div>
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="me-auto" href="/">
            GetMyFood :)
          </NavbarBrand>
          <NavbarToggler
            className="me-2"
            onClick={() => setDrawer(!openDrawer)}
          />
        </Navbar>
        <React.Fragment>
          <SwipeableDrawer
            anchor={"left"}
            open={openDrawer}
            onOpen={() => setDrawer(true)}
            onClose={() => setDrawer(false)}
          >
            <Box
              sx={{
                width: 250
              }}
              role="presentation"
            >
              <List>
                <ListItem key={"one"} disablePadding>
                  <ListItemButton>
                    <a href="/">Home</a>
                  </ListItemButton>
                </ListItem>
                <ListItem key={"two"} disablePadding>
                  <ListItemButton>
                    <a href={"/menu"}>Menu</a>
                  </ListItemButton>
                </ListItem>
                <ListItem key={"three"}>
                  <a href={"/contact"}>Contact</a>
                </ListItem>
                {/* <ListItem key={""}>
                  <ListItemButton>Menu</ListItemButton>
                </ListItem> */}
              </List>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </div>
  );
};
