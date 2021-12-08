import React from "react";
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <Heading>
          A Lepro is like a four leaf clover, hard to find and lucky to have
          one.
        </Heading>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>

      <Box bg="tomato" w="100%" p={4} color="white">
        <Heading>Welcome to the LuckyLepro Club</Heading>
        <Flex>
          <Text>
            LuckyLepros are an Irish legend and folklore themed civilisation of
            10,000 unique, mystical, and non-fungible Irish leprechauns. Lepros
            are Inspired by Irish history which tells Leprechauns as
            supernatural quick-witted beings, usually depicted as little bearded
            men, wearing a coat and hat, who partake in mischief. In the context
            of the metaverse, these leprechauns are called Lepros which are NFTs
            that live on the Ethereum Blockchain as ERC-721 tokens. Become part
            of an exclusive community of LuckyLepros, broadening your roots into
            Irish culture.Leprechauns are classed as many throughout history as
            a charm with great luck.
          </Text>
          <Box>
            <Image />
          </Box>
        </Flex>
      </Box>

      <Box>
        <Heading>Buy a Lepro - it's fair distribution</Heading>
        <Flex>
          <Text>
            Fair Launch, fair distribution. All Lepros cost 0.04 ETH Ownership
            and commercial usage rights given to the consumer over their NFT
            Want to join a growing Lepro community? Mint one today and claim
            ownership
          </Text>
          <Button>But a Lepro</Button>
        </Flex>
      </Box>

      <Box>
        <Heading>Meet the Lepros</Heading>
        <Image />
      </Box>

      <Flex>
        <Image />
        <Box>
          <Heading>Origins of Ireland</Heading>
          <Text>
            The Leprechaun is part of Irish mythology and folklore also known as
            ?wee folk?or the ?little people?. Standing 2-3 feet tall,
            leprechauns are a mischievous character. Tales of these small
            creatures first emerged in the 8thcentury, when legends about tiny
            dwellers began circulating among the Celts. They are believed to be
            a part of another piece of famous folklore, as they are
            traditionally known to be members of the fairy family.
          </Text>
        </Box>

        <Box>
          
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
