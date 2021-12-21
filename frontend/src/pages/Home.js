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
  ListIcon,
} from "@chakra-ui/react";
import Banner from "../images/Banner.jpg";
import { Link } from "react-router-dom";
import Road from "../images/Road.jpg";
import Leprechaunhorseshoe from "../images/Leprechaunhorseshoe.jpg";
import MdCheckCircle from "@chakra-ui/icons";

const Home = () => {
  return (
    <>
      <Box my={10}>
        <Heading p={3} bg="#b4dccc">
          A Lepro is like a four leaf clover, hard to find and lucky to have
          one.
        </Heading>
        <Image pt={2} src={Banner} alt="" maxW="80%" margin="0 auto" />
      </Box>

      <Box my={10}>
        <Heading p={3} bg="#fef79d">
          Welcome to the LuckyLepro Club
        </Heading>
        <Flex p={10}>
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

      <Box my={10}>
        <Heading p={3} bg="#d4ebf3">
          Buy a Lepro - it's fair distribution
        </Heading>
        <Flex p={10}>
          <Text>
            Fair Launch, fair distribution. All Lepros cost 0.04 ETH Ownership
            and commercial usage rights given to the consumer over their NFT
            Want to join a growing Lepro community? Mint one today and claim
            ownership
          </Text>
          <Link to="/buy">
            <Button>Buy a Lepro</Button>
          </Link>
        </Flex>
      </Box>

      <Box my={10}>
        <Heading p={3} bg="#e4ccfc">
          Meet the Lepros
        </Heading>
        <Image />
      </Box>

      <Flex my={10}>
        <Image />
        <Box>
          <Heading p={3} bg="#b4dccc">
            Origins of Ireland
          </Heading>
          <Text py={10}>
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

      <Flex my={10}>
        <Box w="100%">
          <Heading p={3} bg="#fee9e8">
            Where do these little folk live?
          </Heading>
          <Text></Text>
        </Box>
        <Image />
      </Flex>

      <Flex my={10}>
        <Image />
        <Box w="100%">
          <Heading p={3} bg="#dbdbdc">
            Pot of gold
          </Heading>
          <Text></Text>
        </Box>
      </Flex>

      <Flex my={10}>
        <Box w="100%">
          <Heading p={3} bg="#fef79d">
            Lucky Token
          </Heading>
          <Text></Text>
        </Box>
        <Image />
      </Flex>

      <Flex my={10}>
        <Image />
        <Box w="100%">
          <Heading p={3} bg="#d4ebf3">
            Tiny tricksters!
          </Heading>
          <Text></Text>
        </Box>
      </Flex>

      <Box my={10}>
        <Heading p={3} bg="#e4ccfc">
          Lepro Traits
        </Heading>
        <Text></Text>
      </Box>

      <Box my={10}>
        <Heading p={3} bg="#fee9e8">
          Lucky Token
        </Heading>
        <Flex py={3} alignItems="center" w="100%">
          <Text py={10}>
            History tells leprechauns are associated with the luck of the
            Irish. Legend has it that keeping these small creatures will secure
            a wee (small) bit of luck in addition to three wishes. However, be
            cautious about what you wish for. A story once told a man wished to
            become the king of a tropical island. His wish came true immediately
            and he was King of a deserted tropical island all by himself. All
            Lepros bring luck, but some are rarer than others bringing added
            treasures
          </Text>
          <Image src={Leprechaunhorseshoe} maxW="30%" />
        </Flex>
      </Box>

      <Box my={10}>
        <Heading p={3} bg="#b4dccc">
          Lepro RoadMap
        </Heading>
        <Flex justifyItems="centre" alignItems="center">
          <Image src={Road} maxW="40%" />
          <Box maxW="60%" p={20}>
            <Text pb={5}>
              The LuckyLepro roadmap will be rewarding, fun and collaborative.
              Lepro holders will be rewarded with treasures as we activate
              various stages of the roadmap. With imaginative ideas, adequate
              resources, and coordination, we believe we can create a
              collaborative LuckyLepros community.
            </Text>

            <List pt={5}>
              <ListItem>
                <ListIcon color="green.500" />
                0% We launch a wallet connection portal on our website to allow
                people into our platform initiating the minting process and the
                beginning of the LuckyLepros community.
              </ListItem>

              <ListItem>
                <ListIcon color="green.500" />
                20% sold: We give away 5 rare Lepros (top 8% rarity) to random
                holders as a token of gratitude for their support.
              </ListItem>

              <ListItem>
                <ListIcon color="green.500" />
                40% sold: We fund our Lepro community ?Rainbow Gold Pot Project"
                with 5 ETH. More information relating to the rainbow gold pot
                below.
              </ListItem>

              <ListItem>
                <ListIcon color="green.500" />
                60% sold: We give away 5 legendary Lepros (top 2% rarity) to
                random holders as a token of gratitude for their continued
                support.
              </ListItem>

              <ListItem>
                <ListIcon color="green.500" />
                80% sold: We launch LuckyLepros?Rainbow Gold Pot Project"on our
                discord. Our first goal is to have an exclusive chat where
                Lepros can vote and speak upon upcoming ideas to grow the
                community.
              </ListItem>

              <ListItem>
                <ListIcon color="green.500" />
                100% sold: We fund the Lepro community ?Rainbow Gold Pot
                Project"with a total of 20 ETH. We donate 5 ETH to charity
                organisations, the community can decide which one it will be.
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>

      <Flex my={10}>
        <Box>
          <Heading p={3} bg="#dbdbdc">
            Community Rainbox Gold Pot
          </Heading>
          <Text py={10}>
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

      <Flex my={10}>
        <Box>
          <Heading p={3} bg="#fef79d">
            Community Tools
          </Heading>
          <Text py={10}>
            Here are some helpful tools inspired by other communities. Please
            note that these are unofficial in nature. Every assignment of an
            Lepros overall value or rarity is inherently subjective
          </Text>
        </Box>
        <Image />
      </Flex>

      <Box my={10}>
        <Heading p={3} bg="#d4ebf3">
          Meet the Team
        </Heading>
        <Flex>
          <Box>
            <Image />
            <Text>Keith Finn - Founder</Text>
          </Box>

          <Box>
            <Image />
            <Text>Niamh Coleman - Founder</Text>
          </Box>

          <Box>
            <Text>
              Hey there, we're Keith and Niamh. We're two young Irish creators
              and are very excited to share with you LuckyLepros. Head over to
              our FAQ page now where we answer some of your most frequent asked
              questions about us and the Lepros.
            </Text>
            <Link to="/team">
              <Button>Learn more about us here</Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
