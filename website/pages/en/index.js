/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#contact">Contact</Button>
            <Button href={docUrl('whoami.html')}>Who am I</Button>
            <Button href={docUrl('expertise.html')}>Expertise & Skills</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block>
        {[
          {
						content:`
I have been working with \`Jenkins\`, \`TravisCI\`, \`GitLabCI\` to deploy content to Cloud Providers

My favorite stack is AWS (S3 + CloudFront, API Gateway + Lambda + Dynamo, ECS, CloudFormation)

I'm [Solutions Architect Associate](https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-04-24&ci=AWS00847156) certified
`,
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Cloud & DevOps Ready',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark" id="contact">
        {[
          {
						content: `
\`\`\`js
import { Aarón } from 'Core';

const contact = [
	{ mail: "aaron.hmaya@gmail.com" },
	{ telegram: "https://t.me/aaroncadillac" },
	{ github: "https://github.com/aaroncadillac" },
	{ linkedin: "https://www.linkedin.com/in/aaronhmaya" },
	{ twitter: "@aaron_cadillac"}
] 

Aarón.setContactInfo(contact);
\`\`\`

If you want to navigate instead of copy and paste go to [contact me](/docs/contact-me) into API section
`,
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Contact',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
						content: `
My principal knowledge is front end, i have worked with \`Angular\`, \`React\`, \`Polymer\`, \`LitElement\`, \`SASS\`, \`ES6\`, \`Gulp\`, \`Webpack\`, \`BrowserSync\` and I'm learning \`Vue\`

...but

I have also worked with \`Cloud Solution Models\`, \`API Design & Develop\`, \`NodeJS\`, \`GraphQL\`, \`Serverless\`
`,
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Front End Architect',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.companies || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.companies
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Where have i worked in?</h2>
          <p>This companies trusted on me</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
