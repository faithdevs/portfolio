import React from "react";
import styled from "styled-components";
import { Span, Folder, Icons } from "./Setup";

const Container = styled.div`
  @media (max-width: 7069px) {
    order: 1;
    margin-top: 400px;
    
    
  }
`;

const Group = styled.div`
 
 
  
`;

const WriteUp = styled.p`
  margin-top: 10px;
  
  line-height: 1.5;
  

  
`;

const Nav = styled.div`
  display: flex;


`;

const Content = () => {
  return (
    <Container>
      <Nav>
        <h1>
          Hello there
          <span role="img" aria-label="emoji">
          🙂
          </span>
          !
        </h1>
      </Nav>

      <WriteUp>
        I'm <span>Faith Ugbeshe</span>, known as faithdevs, I build stuff that
        works on the web!{" "}
      </WriteUp>

      <Group>
        <WriteUp>
        My motivation for being a software developer comes from the passion I have for problem solving, thinking out-of-the-box or better still, thinking like there is no box. 
        My passion for developing new innovative ideas and learning tools & methods have made me better today than I was yesterday. I code, build, design & scale full-stack web applications.
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
          <Folder>Languages</Folder>
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
          </ul>
        </ul>
      </div>

      <div className="box">
        <ul className="directory-list">
          <Folder>Frameworks</Folder>
          <ul className="tools">
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
          Aside from work, I spend lots of time with my family{" "}
          . I also love watching movies. 
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
          <Span variant="default" href="https://instagram.com/mz_ugbeshe">
            instagram
          </Span>{" "}
          . You can send me a message and I’ll reply as soon as I can.
        </WriteUp>
      </Group>

      <div className="footer">
        <p>&copy; {new Date().getFullYear()} faithdevs</p>
      </div>

    </Container>
  );
};

export default Content;
