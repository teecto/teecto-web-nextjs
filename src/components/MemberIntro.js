import React from "react";
import { Container, Grid } from "@mui/material";
import Service from "./service/Service";
import Process from "./Process";
import ProjectShowcase from "./ProjectShowcase";
import Team from "./Team";
import Contact from "./Contact";
import Image from "next/image";
import about from "../../public/images/about.png";
import Review from "./review/Review";


function MemberIntro() {
  return (
    <>
      <div className="member-intro">
        <div className="intro-content">
          <Container>
            <h1 data-aos="fade-up" data-aos-duration="2000">
              Data-Driven Decisions,
            </h1>
            <h1 data-aos="fade-up" data-aos-duration="1500">
              Pixel-Perfect Results:
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="1200">
              Your Success Story Starts Here.
            </h2>
          </Container>
        </div>
        <div className="intro-one">
          <Container>
            <Review/>
            <div className="about-section">
              <Grid container spacing={2} alignItems="center">
                <Grid item lg={6} md={6} xs={12}>
                  <div className="about-img">
                     <Image src={about} alt="teecto-about"></Image>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <div className="about-content">
                    <div className="section-subtitle">About Us</div>
                    <h2>
                      Need a Creative Product? <br /> We can Help You!
                    </h2>
                    <p>
                      We are a passionate team of web development experts,
                      driven by a shared desire to craft exceptional online
                      experiences that elevate your brand and fuel your business
                      growth.
                    </p>
                    <p>
                      Our team is comprised of highly skilled and experienced
                      designers, developers, and strategists who stay at the
                      forefront of the ever-evolving web development landscape.
                      We combine cutting-edge technologies with a data-driven
                      approach to create websites that are not only visually
                      stunning but also optimized for performance and search
                      engines.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Service />
          <Process />
          <ProjectShowcase />
          {/* <Team /> */}
          <Contact />
        </div>
      </div>
    </>
  );
}

export default MemberIntro;
