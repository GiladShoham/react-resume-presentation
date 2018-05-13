// Import React
import React from "react";
import Interests from '@bit/giladshoham.cv.sidebar.interests';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text,
  Link,
  Fill,
  S
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
          React Resume
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          How and why I built my resume using React components
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image style={{ borderRadius: "50%" }} src="https://en.gravatar.com/userimage/51779316/975a7ab5400cfac3e90be71f242241eb.jpg?size=200"/>
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
          Gilad Shoham
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Dev & Open Source Leader @ Bit
          </Text>
          <Fill>
            <Link href="mailto:shoham.gilad@gmail.com">
            shoham.gilad@gmail.com
            </Link>
          </Fill>
          <Fill>
            <Link href="mailto:gilad@bitsrc.io">
            gilad@bitsrc.io
            </Link>
          </Fill>
          <Fill>
            <Link href="https://github.com/GiladShoham">
            github.com/GiladShoham
            </Link>
          </Fill>
          <Fill>
            <Link href="https://medium.com/@giladshoham">
            medium.com/@giladshoham
            </Link>
          </Fill>
          <Fill>
            <Link href="https://linkedin.com/in/shohamgilad">
            linkedin.com/in/shohamgilad
            </Link>
          </Fill>
          {/* <Interests list={['Cycling', 'Technologies', 'Reading']}/> */}
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Why using React</Heading>  
          <BlockQuote>
            <Quote textSize={32}>Confining a resume to a single page <S type="italic">(application)</S> is good advice for anyone. 
            </Quote>
            <Cite>Daniel Lyons</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]}>
          <Text textColor="tertiary" textSize={32} fit bold>
          Resume Goal
          </Text>
          <Image height="200px" width="200px" style={{ borderRadius: "50%" }} src="https://image.freepik.com/free-vector/darts-game_23-2147500916.jpg"/>
          <Text textColor="tertiary" size={1} fit bold>
          To get you an interview
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Text textColor="tertiary" textSize={32} fit bold>
          HR gets tons of CVs
          </Text>
          <Image height="200px" width="200px" style={{ borderRadius: "50%" }} src="https://cdn3.iconfinder.com/data/icons/mixed-bag-1/150/6_-256.png"/>
          <Text textColor="tertiary" size={1} fit bold>
          So you have about 30 seconds
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Your plan out of it</Heading>
          <List>
            <ListItem>Be different and unique</ListItem>
            <ListItem>Earn time</ListItem>
            <ListItem>Move to the technical people review</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>How is it working?</Heading>
          <Text> 
          HR, most of the time don't know to judge and review your website (professionally), so they just pass it down to the technical
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>What this say about you?</Heading>
          <List>
            <ListItem>You have an out of the box way of thinking</ListItem>
            <ListItem>You really like what you do, so you do the extra mile (faster progress in the future)</ListItem>
            <ListItem>You take the job search seriously</ListItem>
            <ListItem>You know to translate theory to practice</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>More advantages</Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>different versions</Heading>
          <Text textColor="secondary">
          different versions for different positions
          different focus on different versions
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>dynamic versions</Heading>
          <Text textColor="secondary">
          You can change the content any time (as opposed to a sealed PDF)
          You can perform A/B testing on your resume
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>An ice breaker</Heading>
          <Text textColor="secondary">
          There is high chance the interviewer will ask you about it. 
          It's a good start for a conversation on a project you fully control
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>It's all about data</Heading>
          <Text textColor="secondary">
          Using dyamic page you can present more data without making it too noisy
          Show graphs, show and hide sections
          </Text>
          <Image height="200px" width="680px" src="https://camo.githubusercontent.com/03279b0709a76cdbc2bd483f6dd5161b777ad77c/687474703a2f2f692e696d6775722e636f6d2f6536446c7a66412e706e67"/>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>SEO</Heading>
          <Text textColor="secondary">
          Promote your resume website, and monitor it with google analytics
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Personal touch</Heading>
          <Text textColor="secondary">
          Build a bridge between your knowledge and your personality
          </Text>
          <Image height="200px" width="680px" src="https://i.ytimg.com/vi/8M4iJL7lUfc/maxresdefault.jpg"/>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Call to action</Heading>
          <Text textColor="secondary">
          Add call to action to quickly contact you
          </Text>
          <Image height="200px" width="680px" src="https://www.sistersjewelrychest.com/wp-content/uploads/2012/12/contact-me.jpg"/>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Side projects</Heading>
          <Text textColor="secondary">
          Show pictures and add links to your side projects
          </Text>
          <Image height="350px" width="680px" src="https://thefullpint.com/wp-content/uploads/2013/08/Side-Project.jpg"/>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Add to your signature</Heading>
          <Image height="200px" width="680px" src="http://txt-dynamic.cdn.1001fonts.net/txt/b3RmLjE1OC4wMDAwMDAuVFhrZ1VtVnpkVzFsLjAAAA,,/arty-signature.regular.png"/>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Send directly to technical people</Heading>
          <Text textColor="secondary">
          Hi, A cool website for my resume, i'm available for new job
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Image height="400px" width="680px" src="http://www.learnfxtrade.com/wp81316/wp-content/uploads/2016/09/Demo-Trading-450x330.png"/>
        </Slide>
      </Deck>
    );
  }
}
