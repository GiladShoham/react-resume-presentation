# Spectacle Boilerplate

## Contents

- [Reference](#reference)
- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.md](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

## Sample Page
[http://resume-presentation.surge.sh/](http://resume-presentation.surge.sh/)

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run 
```bash
yarn
```
or 
```bash
npm install
```
if you're about that life.

Next, run 
```bash
rm -R .git
```
to remove the existing version control.

Then, to start up the local server, run
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to surge, run 
```bash
npm run deploy
```

## Add resume components from bitsrc.io
- follow the instruction to share resume components from [react-cv-template](https://github.com/GiladShoham/react-cv-template)
- `npm i --save @bit/[userName].[scopeName].sidebar.profile-container @bit/[userName].[scopeName].sidebar.contact-details` e.g `npm i --save @bit/giladshoham.resume.sidebar.profile-container @bit/giladshoham.resume.sidebar.contact-details`
- import installed components on the top of index.js
- `import ProfileContainer from "@bit/giladshoham.resume.sidebar.profile-container";`
- `import ContactDetails from "@bit/giladshoham.resume.sidebar.contact-details";`
- add the components to a new slide:
```html
<Slide transition={["fade"]}>
  <Heading size={6} textColor="secondary" caps>Demo</Heading> 
  <div style={{ marginLeft: "calc(50% - 133px)" }}>
    <ProfileContainer name="Gilad Shoham" title="Dev & Open source Leader @bit" imagePath="https://en.gravatar.com/userimage/51779316/975a7ab5400cfac3e90be71f242241eb.jpg?size=200" style={{margin: "0.5rem auto"}}/>
    <ContactDetails
      mail="shoham.gilad@gmail.com"
      phoneNumber="+972-050-xxxxxx"
      website="medium.com/@giladshoham"
      linkedin="linkedin.com/in/shohamgilad/"
      github="github.com/GiladShoham"
      twitter="twitter.com/ShohamGilad"
      style={{ margin: "0.5rem auto" }}
    />
  </div>
</Slide>
```