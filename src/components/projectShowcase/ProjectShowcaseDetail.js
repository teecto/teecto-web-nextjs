"use client";
import React, { useState } from "react";
import {Grid} from "@mui/material";
import Image from "next/image";
import showcaseImg1 from "../../../public/images/showcase-1.jpeg";
import showcaseImg2 from "../../../public/images/showcase-2.jpeg";
import showcaseImg3 from "../../../public/images/showcase-3.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProjectShowcaseDetail({categories}) {
  

  return (
    <>
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
    </>
  );
}

export default ProjectShowcaseDetail;
