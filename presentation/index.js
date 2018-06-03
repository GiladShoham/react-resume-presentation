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
          <Heading size={6} textColor="secondary" caps>What are your goals?</Heading>
          <List>
            <ListItem>Be different and unique</ListItem>
            <ListItem>Get more review time & focus</ListItem>
            <ListItem>Cross to technical review</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>How is it working?</Heading>
          <Text> 
          HR often turns to the technical team for assistance and technical review of your Resume. So, your Resume is an opportunity to do more than tell your story. It’s how you can show what you can do.
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>What if your Resume were a React application?</Heading>
          <List>
            <ListItem>Out-of-the-box thinking</ListItem>
            <ListItem>You care about the quality of what you deliver</ListItem>
            <ListItem>You take pride in your work and take it seriously</ListItem>
            <ListItem>You understand how code and business goals play together</ListItem>
            <Image height="200px" width="200px" src="http://www.affordable-internet-marketing.com/pics/outofthebox-marketing.jpg" display="inline"/>            
            <Image height="200px" width="200px" src="http://inclinition.com/wp-content/uploads/2016/12/Quality-Assurance.jpg" display="inline"/>            
            <Image height="200px" width="200px" src="http://proudtobeme.org.uk/graphics/Proud-To-Bee-Me-Logo.png" display="inline"/>            
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>More advantages</Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Tech teams can view your code</Heading>
          <List>
            <ListItem>Open source the code</ListItem>
            <ListItem>Tech teams can see your best work</ListItem>
            <ListItem>Get feedback and improve your coding skills</ListItem>
            <Image height="200px" width="400px" src="https://aspira.ie/wp-content/uploads/2016/07/bartopen_source_10932-600x330.jpg" display="inline"/>            
            <Image height="200px" width="300px" src="https://3.bp.blogspot.com/-iOTfICQgISc/Vv1WJXQ_A_I/AAAAAAAAj8w/jpEvAMRYj-EBBtmGK2r3xG2nbV9GGqUBQ/s640/bug.jpg" display="inline"/>            
            
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>different versions</Heading>
          <Text textColor="secondary">
          different versions for different positions
          different focus on different versions
          </Text>
          <Image height="230px" width="386px" src="https://www.ibackupstatic.com/source/images/version_banner.png"/>            
          </Slide>
          
          <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>dynamic versions</Heading>
          <Text textColor="secondary">
          You can change the content any time (as opposed to a sealed PDF)
          and even perform A/B testing on your resume
          </Text>
          <Image height="230px" width="386px" src="https://www.sitespect.com/sites/default/files/2016/ab-testing-compressor.jpg"/>            
          </Slide>
          
          <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>An ice breaker</Heading>
          <Text textColor="secondary">
          There is a good chance the interviewer will ask you about it. 
          It's a good start for a conversation on a project you fully control
          </Text>
          <Image height="230px" width="230px" src="http://ladieskitty.net/wp-content/uploads/2013/01/icebreaker_games.jpg"/>            
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>It's all about data</Heading>
          <Text textColor="secondary">
          Using a dynamic page you can visualize cool data and make it look beautiful
          </Text>
          <Image height="200px" width="680px" src="https://camo.githubusercontent.com/03279b0709a76cdbc2bd483f6dd5161b777ad77c/687474703a2f2f692e696d6775722e636f6d2f6536446c7a66412e706e67"/>
          </Slide>
          
          <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>SEO</Heading>
          <Text textColor="secondary">
          Promote your resume website, and monitor it with  
          <Link href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a120258822w177838555p176441319">
          "google analytics"
          </Link>
          </Text>
          <Image height="200px" width="200px" src="http://www.illuminationworksllc.com/wp-content/uploads/2017/01/seo.png"/>
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
          Add a call-to-action to help recruiters get in touch
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
          "Hi, here’s a cool website for my resume… i’m available for my next challenge :) "
          </Text>
          <Image height="200px" width="200px" src="http://www.firstimpressionshsv.com/wp-content/uploads/2015/09/1a4acaa.jpg"/>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>Reuse</Heading>        
          <Image height="400px" width="680px" src="http://www.learnfxtrade.com/wp81316/wp-content/uploads/2016/09/Demo-Trading-450x330.png"/>
        </Slide>
      </Deck>
    );
  }
}
