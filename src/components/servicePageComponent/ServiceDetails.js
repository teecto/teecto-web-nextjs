"use client";
import React from "react";
import SkillCard from "@/components/hero/SkillCard";
import { Grid } from "@mui/material";
import photoshop from "/public/images/photoshop.png";
import xd from "/public/images/adobe-xd.png";
import ai from "/public/images/ai.png";

const uiToolList = [
  { title: "Adobe Photoshop", img: photoshop },
  { title: "Adobe Illestator", img: ai },
  { title: "Adobe XD", img: xd },
];

function ServiceDetails({details}) {
  return (
    <>
      
      <div className="service-page-content">
        {details?.title &&  <h2>{details?.title}</h2>}
        {details?.description && <p>{details?.description}</p>}
      </div>

      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12}>
          <div className="service-icon-content">
          {details && details?.images && details?.images.length>0  && <h4>Tools </h4>}
            <ul className="skills-list">
              {details && details?.images && details?.images.length>0 && details.images.map((card, key) => {
                return (
                  <SkillCard key={key} title={details?.title} img={card.asset.url} />
                );
              })}
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ServiceDetails;
