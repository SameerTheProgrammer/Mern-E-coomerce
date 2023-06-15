import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/sameertheprogrammer/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dprs6yt7m/image/upload/v1686746846/avatars/mrihph3wolpkglqz5nrc.png"
              alt="Founder"
            />
            <Typography>Sameer Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Sameer kumar. Only with the
              purpose to learn MERN Stack
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/sameertheprogrammer/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://github.com/SameerTheProgrammer" target="blank">
              <GitHubIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
