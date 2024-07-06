import React from "react";
import { Container, Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";
import frontEnd from "../../../public/images/frontend.png";
import development from "../../../public/images/webdevolopment.png";
import bug from "../../../public/images/bug.png";
import motion from "../../../public/images/motion.png";
import ui from "../../../public/images/ux-design.png";
import graphic from "../../../public/images/graphic-designer.png";

const serviceContentList = [
  {
    title: "High Range Of Amenities",
    img: frontEnd,
    detail: "20",
    index: "first",
  },
  {
    title: "Front-End Development",
    img: frontEnd,
    detail:
      "Specializing in crafting pixel-perfect, responsive interfaces,we focus on React.js, Next.js, and modern JavaScript frameworks to elevate your online presence through meticulous front-end development.",
    index: "middle",
  },
  {
    title: "Website Development",
    img: development,
    detail:
      "Building production-ready, Node.js/Express.js or other modern JavaScript frameworks for both frontend and backend development. Elevate your online presence with cutting-edge tools and technologies, ensuring superior performance above all.",
    index: "middle",
  },
  {
    title: "Bug Fix",
    img: bug,
    detail:
      "Resolve bugs and enhance the performance of projects, or websites developed with React, Next.js, Vue js and other modern JavaScript frameworks. Our expert bug-fixing service ensures a seamless and error-free experience, Also rebuild your website interface.",
    index: "middle",
  },
  {
    title: "Motion Graphic",
    img: motion,
    detail:
      "Get The beauty of motion graphics is its versatility from our expertise. Whether you need a short explainer video for social media, a dynamic presentation for investors, or an engaging product demo, motion graphics can be adapted to fit your specific goals and target audience.",
    index: "middle",
  },
  {
    title: "UI / UX Design",
    img: ui,
    detail:
      "Architect your platform with our UI/UX design services. Elevate user experience, encouraging longer engagement on your website and boosting overall satisfaction. Our designs blend aesthetics with seamless navigation, ensuring a visually appealing and user-friendly online environment crafted through extensive research.",
    index: "middle",
  },
  {
    title: "Graphics Design",
    img: graphic,
    detail:
      "Revitalize your brand through our graphic design expertise, specializing in impactful brand promotion. From compelling social media posters to attention-grabbing banners and brochures, Discover a suite of high-level graphic services that ensure your visual presence shines in every detail.",
    index: "middle",
  },
  {
    title: "We Are Here to serve you and your business!",
    index: "last",
  },
];

function Service() {
  return (
    <>
      <div className="service-header">
        <Container>
          <h3>Dive into the Latest Technologies and Trends</h3>
          <h2>
            <span>Building the Web of Tomorrow:</span> <br /> Exploring the
            Frontiers of Development
          </h2>
        </Container>
      </div>
      <div className="service">
        <div class="service-wrappeer">
          <Grid container spacing={0}>
            {serviceContentList.map((card, key) => {
              return (
                <>
                  {card.index === "first" && (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                      <div class="service-wrap">
                        <div class="round-content">
                          <div class="number">
                            <span class="counter">{card.detail}</span>+
                          </div>
                          <h6>{card.title}</h6>
                        </div>
                      </div>
                    </Grid>
                  )}
                  {card.index === "middle" && (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                      <ServiceCard
                        title={card.title}
                        img={card.img}
                        detail={card.detail}
                      />
                    </Grid>
                  )}
                  {card.index === "last" && (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                      <div class="service-wrap service-color service-border-none">
                        <h4>{card.title}</h4>
                      </div>
                    </Grid>
                  )}
                </>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Service;
