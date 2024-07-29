import { Grid } from "@mui/material";
import React from "react";
import reputation from "../../../public/images/reputation.png";
import check from "../../../public/images/check.png";
import rating from "../../../public/images/rating.png";
import ReviewCard from "./ReviewCard";

const reviewContent = [
  { title: "Years Of Experience", number: "7+", img: reputation },
  { title: "Completed Projects ", number: "130+", img: check },
  { title: "Happy Clients", number: "65+", img: rating }
];

function Review() {
  return (
    <>
      <div className="review-wrapper">
        <Grid container spacing={2}>
          {reviewContent.map((card, key) => {
            return (
              <Grid key={key} item lg={4} md={4} sm={6} xs={12}>
                <ReviewCard
                  title={card.number}
                  number={card.title}
                  img={card.img}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Review;
