import React from "react";
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import Banner from '../images/Banner.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Box>
        <Heading>
          A Lepro is like a four leaf clover, hard to find and lucky to have
          one.
        </Heading>
        <Image src={Banner} alt="Dan Abramov" maxW="100%" />
      </Box>

      <Box>
        <Heading>Welcome to the LuckyLepro Club</Heading>
        <Flex >
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

      <Box maxW="70%">
        <Heading>Buy a Lepro - it's fair distribution</Heading>
        <Flex>
          <Text>
            Fair Launch, fair distribution. All Lepros cost 0.04 ETH Ownership
            and commercial usage rights given to the consumer over their NFT
            Want to join a growing Lepro community? Mint one today and claim
            ownership
          </Text>
          <Link to="/buy"><Button>Buy a Lepro</Button></Link>
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
      </Flex>

      <Flex>
        <Box>
          <Heading>Where do these little folk live?</Heading>
          <Text></Text>
        </Box>
        <Image />
      </Flex>

      <Flex>
        <Image />
        <Box>
          <Heading>Pot of gold</Heading>
          <Text></Text>
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Heading>Lucky Token</Heading>
          <Text></Text>
        </Box>
        <Image />
      </Flex>

      <Flex>
        <Image />
        <Box>
          <Heading>Tiny tricksters!</Heading>
          <Text></Text>
        </Box>
      </Flex>

      <Box>
        <Heading>Lepro Traits</Heading>
        <Text></Text>
      </Box>

      <Flex>
        <Box>
          <Heading>Lucky Token</Heading>
          <Text></Text>
        </Box>
        <Image />
      </Flex>

      <Box>
        <Flex>
          <Image />
          <Text>
            The LuckyLepro roadmap will be rewarding, fun and collaborative.
            Lepro holders will be rewarded with treasures as we activate various
            stages of the roadmap. With imaginative ideas, adequate resources,
            and coordination, we believe we can create a collaborative
            LuckyLepros community. ·0% We launch a wallet connection portal on
            our website to allow people into our platform initiating the minting
            process and the beginning of the LuckyLepros community. -20% sold:
            We give away 5 rare Lepros (top 8% rarity) to random holders as a
            token of gratitude for their support. -40% sold: We fund our Lepro
            community ?Rainbow Gold Pot Project" with 5 ETH. More information
            relating to the rainbow gold pot below. -60% sold: We give away 5
            legendary Lepros (top 2% rarity) to random holders as a token of
            gratitude for their continued support. -80% sold: We launch
            LuckyLepros?Rainbow Gold Pot Project"on our discord. Our first goal
            is to have an exclusive chat where Lepros can vote and speak upon
            upcoming ideas to grow the community. -100% sold: We fund the Lepro
            community ?Rainbow Gold Pot Project"with a total of 20 ETH. We
            donate 5 ETH to charity organisations, the community can decide
            which one it will be.
          </Text>
        </Flex>
      </Box>

      <Flex>
        <Box>
          <Heading>Community Rainbox Gold Pot</Heading>
          <Text>
            If you're lucky enough to own a Lepro, you?re owning a rare piece of
            art and gaining membership access to a collaborative community where
            your voice impacts the future direction of the community. We want to
            continue to tell the many tales of leprechauns throughout history,
            their current travels onto the blockchain and their future
            adventures. To do this, we want to collaborate with Lepro holders
            and develop the LuckyLepros story further. Funds from the Community
            Rainbow Gold Pot Project will serve as the initial start-up capital
            required to kick start these projects and begin the new era of
            Lepros.
          </Text>
        </Box>
        <Image />
      </Flex>

      <Flex>
        <Box>
          <Heading>Community Tools</Heading>
          <Text>
            Here are some helpful tools inspired by other communities. Please
            note that these are unofficial in nature. Every assignment of an
            Lepros overall value or rarity is inherently subjective
          </Text>
        </Box>
        <Image />
      </Flex>

      <Box>
        <Flex>
          <Box>
            <Image/>
            <Text></Text>
          </Box>

          <Box>
            <Image/>
            <Text></Text>
          </Box>

          <Box>
            <Text>

            </Text>
            <Button></Button>
          </Box>
        </Flex>
      </Box>

      

    </>
  );
};

export default Home;
