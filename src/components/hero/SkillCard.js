import { Tooltip } from "@mui/material";
import React from "react";
import Image from "next/image";


function SkillCard({title, img}) {
  return (
    <>
      <li className="skill-card">
        <Tooltip title={title} placement="top">
          <div className="card-icon">
            <Image src={img} height='' width='' alt={title}></Image>
          </div>
        </Tooltip>
      </li>
    </>
  );
}

export default SkillCard;
