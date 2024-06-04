import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box>
      <Flex as="nav" bg="teal.500" p={4} color="white">
        <Button as={Link} to="/" variant="ghost" color="white">
          Home
        </Button>
        <Button as={Link} to="/download" variant="ghost" color="white">
          Download
        </Button>
      </Flex>
      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Navigation;
