import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ListItem,
  OrderedList,
  Container
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Container maxW="80%" display="flex" flexDirection="column" margin="0 auto" justifySelf="center" alignSelf="center" >
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Question 1: What's an NFT?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            NFTs are tokens that we can use to represent ownership of unique
            items. They let us tokenise things like art, collectibles, even real
            estate. They can only have one official owner at a time and they're
            secured by the Ethereum blockchain ? no one can modify the record of
            ownership or copy/paste a new NFT into existence. For more
            information please see: https://ethereum.org/en/nft/
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Question 2: How do I get a Lepro?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    The first step is to set up a MetaMask wallet, if, of
                    course, you don't already have one! For more information,
                    please see their website here: https://metamask.io/. If you
                    have any questions, please hop into our Discord server and
                    we'll be happy to walk you through the process.
                  </ListItem>
                  <ListItem>
                    Once you?ve set up your MetaMask wallet, connect your
                    wallet to this site. You can find the ?Connect to
                    Metamask?button on the ?Buy a Lepro?tab.
                  </ListItem>
                  <ListItem>
                    It's important to note that we'll be releasing Lepros in
                    stages. We're hoping to avoid as many barriers to entry as
                    possible by using the following strategy: Pre-sale
                    opportunities provide distributed windows of purchase so
                    that no one moment is overly congested or risks massive
                    spikes in gas. We can't control what happens on chain on
                    those sales days, but we at least want to do our part.
                    Hereafter we will open the sale of Lepros to rest of the
                    community.
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Question 3: Tell us about the art? Why Lepros? How rare are
                they?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Being two Irish people ourselves, through travelling to different
            places around the world we always run into people that have a story
            to tell about Ireland. We ourselves love our home and are fascinated
            by the way the world is evolving more and more into a digital space.
            We believe the birth of NFT's will allow storytelling to be used in
            a total new light which is why we founded LuckyLepros. Our goal is
            to portray real legend stories relating to the mystical creature of
            Ireland; the leprechaun in the metaverse. As these little lucky
            creatures are closely relatedto storing their wealthin pots of gold,
            we wanted to modernise and develop their stories into a new chapter
            of modern history. In a world where people become more accustomed to
            digitalization and technology through the growth in new technologies
            like the metaverse, it was important for us to not loose sight of
            the real world and that's why we wanted to combine the two. Our
            Lepros have been designed around the traditional leprechaun style: a
            small green hat, coat and trousers. We've of course fleshed this out
            with some of the super rare Lepros wearing the newest styles and
            supporting alternative lifestyles from that of the traditional.Our
            Lepro vary in rarity. The total collection of 10,000 Lepros will the
            total amount that will ever be created and thus has it?s own rarity
            in limited supply. Among the 10,000 Lepros, they have their own
            rarity with different characters having different features. These
            features or traits are programmatically generated from over 175+
            possible traits including expression, beard, clothing, and more
            Irish inspired assets &amp; lucky charms. An example ofthis could be a
            Lepro holding a Four-leaf clover in his hand, this is super rare
            which brings added value. The story behind the clover's dates back
            to hundreds of years where Four-leaf clovers were Celtic charms,
            presumed to offer magical protection and ward off bad luck.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Question 4: Tell us more about the founders and the inspiration
                for this NFT?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Hey there, we're Keith and Niamh, two young (mid-twenties, not as
            young as we used to be) creators from Ireland. I guess there's a lot
            of things we can talk about here, but we will keep it short. We both
            have a passion for storytelling, mental health, and any aspect where
            we promote better quality of life. Of course, this isn't easy, nor
            can it be done overnight but we both wanted to be active in this
            space. We became interested in the crypto space almost two years ago
            now. The idea of decentralised applications, new technologies and
            more really got our heads thinking and in recent months have spent
            countless hours studying these areas even further. At the end of
            summer 2021, we began developing the idea of incorporating a
            traditional leprechaun and their stories onto the blockchain. We
            liked the idea of having the medium on the Ethereum blockchain to
            tell the real stories of these leprechauns. We choose the blockchain
            over conventional methods to modernise these characters and stories
            for many reasons but mainly because we feel so strongly of a fair
            decentralised world and structure. It was then we decided to start
            the LuckyLepros venture. With our shared knowledge and experience in
            conventional aspects of the project like product/graphic design,
            website integration, project management and more coupled with some
            key contributors we developed something we are very proud of. As the
            community grows, so will we. We are very passionate about this
            project which reflects a lot in our real-life personalities. Over
            the next few chapters of the LuckyLepros story, we want to continue
            our best efforts to collaborate with our community and develop more
            ideas, educating more people, telling many more tales of the
            mischievous leprechauns and the positivity they spread.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Question 5: Is there fair distribution?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Fair distribution is something we wanted to make sure of from day
            one. A community is built on shared interests and we wanted to make
            sure diversity in our community to solidify this. Buying a Lepro is
            0.04 ETH. There are no price tiers; Lepro Community membership costs
            the same for everyone. Fifty Lepros are being withheld from the sale
            for additional key milestones in the community roadmap. A maximum of
            two Lepros can be minted per user ensuring fair distribution of the
            community.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Question 6: What can I do with a Lepro?{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            What is utility? Utility NFTs are NFTs that carry some underlying
            utility or application. We are committing to a LuckyLepros having
            utility. That means it will serve a purpose beyond just being a
            unique Lepro that you can own. We love innovation and thinking
            beyond the existence of reality. One of our main reasons for joining
            the NFT space and community is to be part of the future world being
            active contributors. We love change, we promote all ideas and love
            the idea of educating people. We want to collaborate with the Lepros
            and innovate community driven ideas. As part of the Rainbow Gold Pot
            Project, we will fund the community to kick start new ideas to
            expand the brand into new areas of modern society. Our Lepro
            characters were designed with a huge amount of attention to detail
            and serve as unique pieces of art. However, we won?t stop there,
            building utility on top of this is the next step.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Question 7: Where does my NFT go once I purchase a Lepro?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            After you join the community, the Lepro can be found in your
            cryptocurrency wallet.A cryptocurrency wallet allows you to send,
            receive and store digital assets, like NFTs, and cryptocurrencies,
            including ether. The most regularly accepted crypto wallet is
            MetaMask and is what we support.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default FAQ;
