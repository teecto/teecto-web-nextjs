import { Grid } from "@mui/material";
import React from "react";
import Image from "next/image";

function ShowcaseCardTwo({ title, detail, img }) {
  return (
    <>
      <div className="service-box">
        <Grid container spacing={2}>
        {/* alignItems="center" */}
          <Grid item xs={5}>
            <div className="box-content">
              <h4> {title} </h4>
              <p> {detail} </p>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className="box-img-2">
              <Image src={img} alt={title}></Image>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ShowcaseCardTwo;
