import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import blog from "../../../../public/images/serviceShowcase/bike-web-teecto.png";
import coffee from "../../../../public/images/serviceShowcase/coffee-web-teecto.png";
import creative2 from "../../../../public/images/serviceShowcase/ecommerce-web-teecto.png";
import foodie from "../../../../public/images/serviceShowcase/education-web-teecto.webp";
import ShowcaseCardOne from "../showcaseCardComponent/ShowcaseCardOne";
import ShowcaseCardTwo from "../showcaseCardComponent/ShowcaseCardTwo";

const showcaseItemList = [
  { title: "Hello-3", detail: "Hello detail 1", img: coffee },
  { title: "Hello-1", detail: "Hello detail 1", img: foodie },
  { title: "Hello-2", detail: "Hello detail 1", img: blog },
  { title: "Hello-4", detail: "Hello detail 1", img: creative2 },
];

function GraphicShowcase() {
  return (
    <div className="service-showcase-container">
      <Grid container spacing={4}>
        {showcaseItemList.map((item, index) => (
          <Fragment key={index}>
            {(index % 4 === 0 || index % 4 === 3) ? (
              <Grid item xs={5}>
                <ShowcaseCardOne
                  title={item.title}
                  detail={item.detail}
                  img={item.img}
                />
              </Grid>
            ) : (
              <Grid item xs={7}>
                <ShowcaseCardTwo
                  title={item.title}
                  detail={item.detail}
                  img={item.img}
                />
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default GraphicShowcase;
