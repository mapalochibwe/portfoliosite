import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <code>
          <p className="Nav">
            <a className="Button" href="https://medium.com/@aprilrueb" target="blank">Blog</a> &nbsp;
            <a className="Button" href="mailto:aprilrueb@gmail.com" target="blank">Email</a> &nbsp;
            <a className="Button" href="https://github.com/aprilrueb" target="blank">GitHub</a> &nbsp;
            <a className="Button" href="https://www.linkedin.com/in/aprilrueb" target="blank">LinkedIn</a> &nbsp;
            <a className="Button" href="https://twitter.com/aprilrueb" target="blank">Twitter</a>
          </p>
          <p className="Title">
            APRIL RUEB MCKENZIE
          </p>
          <div>
            <p className="Intro">
              Journalist and professional social media addict turned software engineer.
            </p>
            <p>
              Until August 2017, I worked in social media for various magazines: Parents, Good Housekeeping, Prevention, and more. I left my position as head of social media at Rodale to attend the Grace Hopper Program, a 17-week immersive software engineering course for women. Read more about <a href="https://medium.com/@aprilrueb/career-change-from-editor-to-software-engineer-6b67bae4d5bc" target="blank">my career change</a>.
            </p>
            <p>
              I'm currently a senior data science engineer at Hero Digital. My days involve analytics, tag managers, and lots of JavaScript. I work remotely in NYC, making frequent trips to the Philadelphia and New Jersey offices.
            </p>
            <p>
              When I'm not coding, you can find me running, crafting, or scrolling through Instagram.
            </p>
            <p>
              If you're considering attending a coding bootcamp or making a career change, feel free to reach out. I'm more than happy to talk about my experience and answer any questions you may have. At the top of this page is my email, along with other places to find me on the internet.
            </p>
          </div>
        </code>
      </div>
    );
  }
}

export default Portfolio;
