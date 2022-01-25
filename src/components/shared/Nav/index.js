import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
/**
 * Shared component for Navigation
 * @component- Nav
 */
const Nav = (props) => {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="pink">
        Menu
      </MenuButton>
      <MenuList>
        <MenuGroup title="Home">
          <MenuItem><Link href="/">Browse</Link></MenuItem>
          
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Profile">
          <MenuItem>Sell Digital Asset</MenuItem>
          <MenuItem>My Digital Assets</MenuItem>
          <MenuItem>
            <Link href="/creator-dashboard">Creator Dashboard</Link>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

Nav.propTypes = {};

export default Nav;
