"use client";
import React, { useState } from "react";
import { Button, Container, Grid, Tooltip } from "@mui/material";
import Image from "next/image";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import showcaseImg1 from "../../public/images/showcase-1.jpeg";
import showcaseImg2 from "../../public/images/showcase-2.jpeg";
import showcaseImg3 from "../../public/images/showcase-3.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "./projectCard/ProjectCard";

function ProjectShowcase({categories}) {
  // Tabs
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log('categories', categories)

  return (
    <>
      <div className="project-showcase">
        <div className="showcase-header">
          <div class="bg_light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1920"
              height="200"
              viewBox="0 0 1920 756"
              fill="none"
            >
              <g filter="url(#filter0_f_716_1492)">
                <path
                  d="M-325 305L955.5 363L2245 305V366L955.5 450.5L-325 366V305Z"
                  fill="#00C9FF"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_716_1492"
                  x="-630"
                  y="0"
                  width="3180"
                  height="755.5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="152.5"
                    result="effect1_foregroundBlur_716_1492"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>

          <Container>
            <h2>
              <span>50+</span> Stunning Project
            </h2>
            <p>
              We develop the best quality website that serves for the long-term.
              Well-documented, <br /> clean, easy and elegant interface helps
              any non-technical clients.
            </p>
          </Container>
        </div>
        <Button onClick={handleClickOpen}>Hello</Button>
        <Container>
          <TabContext value={value}>
            <div className="tab-list-wrapper">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="tab-list"
              >
                <Tab label="Web & Software" value="1" />
                <Tab label="UI / UX Design" value="2" />
                <Tab label="Graphics & Multimedia" value="3" />
              </TabList>
            </div>

            <TabPanel value="1" sx={{ padding: 0 }}>
              <div className="showcase-wrapper">
                <Grid container spacing={3}>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProjectCard />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProjectCard />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProjectCard />
                  </Grid>
                </Grid>
              </div>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: 0 }}>
              <div className="showcase-wrapper">
                <Grid container spacing={3}>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProjectCard />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProjectCard />
                  </Grid>
                </Grid>
              </div>
            </TabPanel>
            <TabPanel value="3" sx={{ padding: 0 }}>
              <div className="showcase-wrapper">
                <Grid container spacing={3}>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProjectCard />
                  </Grid>
                </Grid>
              </div>
            </TabPanel>
          </TabContext>
        </Container>

        {/* Dialog */}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          maxWidth="lg"
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          className="dialog-wrapper"
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "22px",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            {"Project Details"}

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#fff",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className="dialog-view-conetnt">
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="project-images">
                        <Image src={showcaseImg1} alt="showcase-1"></Image>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-images">
                        <Image src={showcaseImg2} alt="showcase-1"></Image>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-images">
                        <Image src={showcaseImg3} alt="showcase-1"></Image>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Grid>
                <Grid item xs={5}>
                  <div className="project-detail">
                    <h3>Start Hub Project</h3>
                    <div className="sub-title">E - commerce </div>
                    <p>
                      Trade-in values will vary based on the condition, year,
                      and configuration of your eligible trade-in device. Not
                      all devices are eligible for credit. You must be at least
                      18 years old to be eligible to trade in for credit or for
                      an Apple Gift Card. Trade-in value may be applied toward
                      qualifying new device purchase, or added to .{" "}
                    </p>

                    <h4>Compatible With :</h4>
                    <ul>
                      <li>React 18.2.0 [NEW]</li>
                      <li>React Router Dom 6 [NEW]</li>
                      <li>React Context </li>
                      <li>Metarial Ui</li>
                      <li>SCSS (sass )</li>
                      <li>React Swipper Js</li>
                      <li>AOS Animation</li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default ProjectShowcase;
