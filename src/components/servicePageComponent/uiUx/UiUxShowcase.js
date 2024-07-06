import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import air from "../../../../public/images/serviceShowcase/air.png";
import blog from "../../../../public/images/serviceShowcase/blog.png";
import coffee from "../../../../public/images/serviceShowcase/coffee.png";
import creative2 from "../../../../public/images/serviceShowcase/creative-2.webp";
import creative from "../../../../public/images/serviceShowcase/creative.png";
import education from "../../../../public/images/serviceShowcase/education.webp";
import fitnes from "../../../../public/images/serviceShowcase/fitnes.webp";
import foodie from "../../../../public/images/serviceShowcase/foodie.webp";
import portfolio from "../../../../public/images/serviceShowcase/portfolio.png";
import resturant from "../../../../public/images/serviceShowcase/resturant.webp";
import streem from "../../../../public/images/serviceShowcase/streem.png";
import ShowcaseCardOne from "../showcaseCardComponent/ShowcaseCardOne";
import ShowcaseCardTwo from "../showcaseCardComponent/ShowcaseCardTwo";

const showcaseItemList = [
  { title: "Hello-3", detail: "Hello detail 1", img: coffee },
  { title: "Hello-1", detail: "Hello detail 1", img: foodie },
  { title: "Hello-2", detail: "Hello detail 1", img: blog },
  { title: "Hello-4", detail: "Hello detail 1", img: creative2 },
];

function UiUxShowcase() {
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

export default UiUxShowcase;
