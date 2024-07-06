import React from "react";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import figma from "../../../public/images/figma.png";
import react from "../../../public/images/react-js.png";
import redux from "../../../public/images/redux.png";
import showcase from "../../../public/images/showcase-2.jpeg";



function ProjectCard() {
  return (
    <>
      <div className="showcase-item">
        <ul className="dot-item">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="showcase-img">
          <Image src={showcase} alt="showcase"></Image>
          <div className="overly">
            <button>Details</button>
            <button>View Demo</button>
          </div>
        </div>
        <div className="showcase-content">
          <h5>Start Hub Project</h5>
          <h6>Landing Page</h6>

          <div className="showcase-intense">
            <Tooltip title="Figma" placement="top">
              <div className="intense-img">
                <Image src={figma} alt="Figma"></Image>
              </div>
            </Tooltip>
            <Tooltip title="React Js" placement="top">
              <div className="intense-img">
                <Image src={react} alt="React Js"></Image>
              </div>
            </Tooltip>
            <Tooltip title="Redux" placement="top">
              <div className="intense-img">
                <Image src={redux} alt="Redux"></Image>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
