import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex bg="#dbdbdc" py={100} justifyContent="space-evenly"> 
      <Box>
        <Text>Mailing List:</Text>
      </Box>

      <Box>
        <Text>Social media:</Text>
      </Box>

      <Box>
        <Text>Copyright of LuckyLepros 2022.</Text>
      </Box>
    </Flex>
  );
}

export default Footer;
