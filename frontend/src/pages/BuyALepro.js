import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  List,
  ListItem,
  Container
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const BuyALepro = () => {
  return (
    <Container maxW="80%" display="flex" flexDirection="column" margin="0 auto" justifySelf="center" alignSelf="center" >
      <Box>
        <Heading>Buy a Lepro - minting engine!</Heading>
        <Text>
          We support fair launch and fair distribution. All Lepros cost 0.04 ETH
          and can be minted below. Maxiumum two Lepros can be minted per user.
          Before clicking mint, please follow the steps below:
        </Text>

        <List spacing={3}>
          <ListItem>Step 1: Connect your metamask wallet.</ListItem>
          <ListItem>
            Step 2: Select the number of Lepros you'd like to mint. (max. two
            per person)
          </ListItem>
          <ListItem>Step 3: Mint your Lepro and join the community! </ListItem>
        </List>
      </Box>

      <Box>
        <Heading>FAQ and more!</Heading>
        <Text>
          Having trouble minting? Head over to our FAQ page where we answer some
          of your most common questions and more.{" "}
        </Text>
        <Button><Link to="/faq">FAQ</Link></Button>
      </Box>
    </Container>
  );
};

export default BuyALepro;
