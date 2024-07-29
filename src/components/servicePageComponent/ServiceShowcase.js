"use client";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import blog from "/public/images/serviceShowcase/bike-web-teecto.png";
import coffee from "/public/images/serviceShowcase/coffee-web-teecto.png";
import creative2 from "/public/images/serviceShowcase/ecommerce-web-teecto.png";
import foodie from "/public/images/serviceShowcase/education-web-teecto.webp";
import ShowcaseCardOne from "./showcaseCardComponent/ShowcaseCardOne";
import ShowcaseCardTwo from "./showcaseCardComponent/ShowcaseCardTwo";
import ServiceShowcaseCards from "./ServiceShowcaseCards";
import ServiceImage from "./ServiceImage";

function ServiceShowcase({menuPosts, menuDetails}) {
  if(menuDetails?.title.split(' ').join('_') ==='Web_Development'){
    return(
      <ServiceImage menuPosts={menuPosts[0]} />
    )
  }else{
    return(
      <ServiceShowcaseCards menuPosts={menuPosts} />
    )
  }
}

export default ServiceShowcase;
