import {
  Navbar,
  NavItem,
  NavLink,
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
            onClose={() => setDrawer(false)}
          >
            <Box
              sx={{
                width: 250
              }}
              role="presentation"
            >
              <p>bcjsbcjsbc</p>
              <p>bcjsbcjsbc</p>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </div>
  );
};
