import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import foodie from "../../../../public/images/serviceShowcase/foodie-web-teecto.webp";
import quiz from "../../../../public/images/serviceShowcase/quiz-web-teecto.png";
import portfolio from "../../../../public/images/serviceShowcase/portfolio-web-teecto.png";
import coffee from "../../../../public/images/serviceShowcase/coffee-web-teecto.png";
import education from "../../../../public/images/serviceShowcase/education-web-teecto.webp";
import eduWeb from "../../../../public/images/serviceShowcase/edu-web-teecto.png";
import bike from "../../../../public/images/serviceShowcase/bike-web-teecto.png";
import creative from "../../../../public/images/serviceShowcase/creative-web-teecto.webp";
import moto from "../../../../public/images/serviceShowcase/moto-web-teecto.png";
import fitness from "../../../../public/images/serviceShowcase/fitnes-web-teecto.webp";
import eCommerce from "../../../../public/images/serviceShowcase/ecommerce-web-teecto.png";

import ShowcaseCardOne from "../showcaseCardComponent/ShowcaseCardOne";
import ShowcaseCardTwo from "../showcaseCardComponent/ShowcaseCardTwo";

const showcaseItemList = [
  {
    title: "Food Website",
    detail:
      "Food Delights is a visually captivating and user-friendly food website. all built using React and Material-UI components.",
    img: foodie,
  },
  {
    title: "Quiz Master",
    detail:
      "Quiz Master is an engaging and dynamic quiz website designed to challenge users and enhance their knowledge across various topics. Built with React and Material-UI components.",
    img: quiz,
  },
  {
    title: "Profile Web",
    detail:
      "Portfolio is a sleek and modern website designed to highlight my professional achievements, skills, and projects. Developed using HTML, CSS, jQuery, Javascript.",
    img: portfolio,
  },
  {
    title: "Coffee Shop",
    detail:
      "Coffee Connoisseur is a beautifully designed and user-friendly website, using HTML, CSS, jQuery, Javascript.",
    img: coffee,
  },
  {
    title: "Education Website",
    detail:
      "EduMaster is a comprehensive and engaging education website designed. Built with HTML, CSS, jQuery, Javascript,",
    img: education,
  },
  {
    title: "E-Commerce Website",
    detail:
      "ShopMaster is a modern and user-friendly eCommerce website designed to provide a seamless shopping experience for users. Built with Next Js , and Material-UI",
    img: eCommerce,
  },
  {
    title: "Moto Hub",
    detail:
      "MotoHub is an engaging and informative website dedicated to motorcycle enthusiasts.",
    img: moto,
  },
  {
    title: "Creative Website",
    detail:
      "Built with React and Material-UI, the website combines a modern design with user-friendly features ",
    img: creative,
  },
  { title: "Fitness World", detail: "A dynamic and comprehensive fitness website designed to empower users on their fitness journey.", img: fitness },
  { title: "Education Website", detail: "LearnLink is a dynamic and inclusive education platform designed to facilitate learning and skill development across various subjects and disciplines. Built with Html CSS Javascript,", img: eduWeb },
];

function WebDevelopmentShowcase() {
  return (
    <div className="service-showcase-container">
      <Grid container spacing={4}>
        {showcaseItemList.map((item, index) => (
          <Fragment key={index}>
            {index % 4 === 0 || index % 4 === 3 ? (
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

export default WebDevelopmentShowcase;
