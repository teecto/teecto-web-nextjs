import React from "react";
import SkillCard from "@/components/hero/SkillCard";
import { Container, Grid } from "@mui/material";
import html5 from "../../../../public/images/html5.png";
import css3 from "../../../../public/images/css3.png";
import javascript from "../../../../public/images/javascript.png";
import react from "../../../../public/images/react-js.png";
import next from "../../../../public/images/next-js.png";
import redux from "../../../../public/images/redux.png";
import nuxt from "../../../../public/images/nuxt-js.png";
import bootstrap from "../../../../public/images/bootstrap.png";
import metarialUI from "../../../../public/images/metarial-ui.png";
import node from "../../../../public/images/node-js.png";
import sass from "../../../../public/images/sass.png";
import vue from "../../../../public/images/vue-js.png";
import laravel from "../../../../public/images/laravel.png";
import mongodb from "../../../../public/images/mongodb.png";
import mysql from "../../../../public/images/mysql.png";

const frontendIconList = [
  { title: "Html-5", img: html5 },
  { title: "CSS-3", img: css3 },
  { title: "SASS", img: sass },
  { title: "Bootstrap 5", img: bootstrap },
  { title: "Javascript", img: javascript },
  { title: "React Js", img: react },
  { title: "Next Js", img: next },
  { title: "Redux", img: redux },
  { title: "Nuxt Js", img: nuxt },
  { title: "Metarial UI", img: metarialUI },
  { title: "Vue Js", img: vue },
];

const backendIconList = [
  { title: "Node Js", img: node },
  { title: "Laravel", img: laravel },
  { title: "Mongo DB", img: mongodb },
  { title: "My SQL", img: mysql },
];

function WebDevelopment() {
  return (
    <>
      <div className="service-page-content">
        <h2>Web Development</h2>
        <p>
          Welcome to our Website Development Service! We're your partners in
          building powerful online experiences that propel your business
          forward. We take a meticulous approach, guiding you from the initial
          blueprint of user interface (UI) and user experience (UX) to the final
          polished website. Our focus is on crafting beautiful, user-friendly
          interfaces that resonate with your audience, alongside empowering
          admin controls that grant you complete command over your digital
          space.
        </p>
        <p>
          Streamline your operations by transforming them into efficient digital
          workflows. Our development expertise empowers seamless business
          transactions, allowing you to flourish in the ever-evolving online
          landscape.
        </p>
      </div>

      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={6}>
          <div className="service-icon-content">
            <h4> Front-End Development </h4>
            <ul className="skills-list">
              {frontendIconList.map((card, key) => {
                return (
                  <SkillCard key={key} title={card.title} img={card.img} />
                );
              })}
            </ul>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="service-icon-content">
            <h4> Back-End Development </h4>
            <ul className="skills-list">
              {backendIconList.map((card, key) => {
                return (
                  <SkillCard key={key} title={card.title} img={card.img} />
                );
              })}
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default WebDevelopment;
