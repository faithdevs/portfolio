import React from "react";
import styled from "styled-components";
import { Span, Folder, Icons } from "./Setup";

const Container = styled.div`
  @media (max-width: 769px) {
    order: 1;
  }
`;

const Group = styled.div`
  margin: 0;
`;

const WriteUp = styled.p`
  padding: 18px 0 0 !important;
  line-height: 1.5;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: column;
  margin-bottom: 35px;
`;

const Content = () => {
  return (
    <Container>
      <Nav>
        <h1>Hello there 👋🏼!</h1>
      </Nav>

      <WriteUp>
        I'm <span>Faith Ugbeshe</span>, a software engineer based in Lagos,
        Nigeria{" "}
      </WriteUp>

      <Group>
        <WriteUp>
          I have 3 years of sole experience. I am able to work with the web
          application backend and build hybrid applications. I am very skilled
          with PHP and Javascript
        </WriteUp>

        <WriteUp>
          I am a <span>focused driven developer</span>, and I currently work as
          a Freelancer{" "}
        </WriteUp>

        <WriteUp>
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations.
        </WriteUp>
      </Group>

      <div className="box">
        <ul className="directory-list">
          <Folder>Skills</Folder>
          <ul className="tools">
            <Icons variant="javascript">
              <span>
                <i className="fab fa-js-square" />
              </span>
              <span>JavaScript</span>
            </Icons>
            <Icons variant="php">
              <span>
                <i className="fab fa-php" />
              </span>
              <span className="tool">PHP</span>
            </Icons>
            <Icons variant="mysql">
              <span>
                <i className="fas fa-database" />
              </span>
              <span className="tool">MySQL</span>
            </Icons>
            <Icons variant="nodejs">
              <span>
                <i className="fab fa-node-js" />
              </span>
              <span>Node JS</span>
            </Icons>
            <Icons variant="laravel">
              <span>
                <i className="fab fa-laravel" />
              </span>
              <span className="tool">Laravel</span>
            </Icons>
            <Icons variant="react">
              <span>
                <i className="fab fa-react" />
              </span>
              <span className="tool">React</span>
            </Icons>
            <Icons variant="vuejs">
              <span>
                <i className="fab fa-vuejs" />
              </span>
              <span className="tool">Vue</span>
            </Icons>
            <Icons variant="firebase">
              <span>
                <i className="fas fa-cloud" />
              </span>
              <span className="tool">Firebase</span>
            </Icons>
          </ul>
        </ul>
      </div>

      <Group>
        <WriteUp>
          Where can you see my work?{" "}
          <Span
            variant="default"
            href="mailto:ugbeshefaith@gmail.com?subject=Hello Faith!"
          >
            Email me
          </Span>{" "}
          and I will prepare work samples relevant to your project with
          accompanying details.
        </WriteUp>

        <WriteUp>
          Aside from work, I spend lots of time with my family and I love
          hanging out with my friends too{" "}
        </WriteUp>
        <WriteUp>
          I’m mostly available on{" "}
          <Span
            variant="default"
            href="mailto:ugbeshefaith@gmail.com?subject=Hello Faith!"
          >
            email
          </Span>{" "}
          and{" "}
          <Span variant="default" href="https://instagram.com/faithdevs">
            instagram
          </Span>{" "}
          . You can send me a message and I’ll reply as soon as I can.
        </WriteUp>
      </Group>
    </Container>
  );
};

export default Content;
