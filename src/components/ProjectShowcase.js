"use client";
import React, { useState } from "react";
import { Box, Button, Container, Grid, Tooltip } from "@mui/material";
import Image from "next/image";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "./projectCard/ProjectCard";

function ProjectShowcase({categories,technologies}) {
  // Tabs
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log('categories', categories)
  console.log('technologies', technologies)

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
        <Container>
          <TabContext value={value}>
            <div className="tab-list-wrapper">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="tab-list"
              >
                {categories &&  categories.length>0 && categories.map((category, key)=>{
                  return(
                    <Tab key={category._id} label={category?.title} value={key+1} />
                  )
                })}
              </TabList>
            </div>

            {categories &&  categories.length>0 && categories.map((category, key)=>{
              return(
                <TabPanel value={key+1} sx={{ padding: 0 }}>
                  <div className="showcase-wrapper">
                    <Grid container spacing={3}>
                      {category?.posts && category.posts.length>0 
                      ?
                      <>
                      {category?.posts.map((post, key)=>{
                        return(
                          <Grid key={post?._id} item lg={4} md={4} sm={6} xs={12}>
                            <ProjectCard post={post} technologies={technologies} />
                          </Grid>
                        )
                      })}
                      </>
                      :
                      <>
                       <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                          <Box sx={{color:'white'}}>No Posts Found </Box>
                       </Box>
                      </>
                      }
                     
                    </Grid>
                  </div>
                </TabPanel>
              )
             })}
          </TabContext>
        </Container>
      </div>
    </>
  );
}

export default ProjectShowcase;
