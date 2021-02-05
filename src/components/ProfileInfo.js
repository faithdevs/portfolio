import React from "react";
import styled from "styled-components";
import profilePicture from "../img/me.jpg";
import picture from "../img/bgImg.PNG";
import { Span, SVGs } from "./Setup";

const ImageContainer = styled.div`
  width: 300px;
  
  @media (max-width: 769px) {
    order: 2;
    text-align: center;
    margin-left: 10px ;
    width: 230px;
  }
`;

const Image = styled.img`
  max-width: 1000px;
  border-radius: 6px;
  object-fit: contain;
  @media (max-width: 769px) {
    height: auto;
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  @media (max-width: 769px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  margin-bottom: 50px;
 
`;

const ProfileInfo = () => {
  return (
    <ImageContainer>
      <Image src={picture} alt="Faith_Ugbeshe" />
      <div style={{ marginTop: "10px" }}>
        <h4 className="contact">Get in touch</h4>
        <Span
          variant="default"
          href="mailto:ugbeshefaith@gmail.com?subject=Hello Faith!"
        >
          ugbeshefaith@gmail.com
        </Span>

        <LogoContainer>
          <a
            href="https://instagram.com/mz_ugbeshe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGs variant="instagram">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                width="26px"
                height="26px"
              >
                <title>Instagram icon</title>
                <path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z" />
              </svg>
            </SVGs>
          </a>
          <a
            href="https://twitter.com/faithdevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGs variant="twitter">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <title>Twitter icon</title>
                <path
                  d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                  fillRule="nonzero"
                />
              </svg>
            </SVGs>
          </a>
          <a
            href="https://github.com/faithdevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGs variant="github">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </SVGs>
          </a>
          <a
            href="https://www.linkedin.com/in/faithdevs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGs variant="linkedin">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
                width="26px"
                height="26px"
              >
                <title>LinkedIn icon</title>
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
              </svg>
            </SVGs>
          </a>
        </LogoContainer>
      </div>
      <ProfileImage src={profilePicture} alt="Faith_Ugbeshe"/>
    </ImageContainer>

    
  );
};

export default ProfileInfo;
