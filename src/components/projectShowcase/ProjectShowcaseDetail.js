"use client";
import React, { useState } from "react";
import {Grid} from "@mui/material";
import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlockContent from "@sanity/block-content-to-react";


function ProjectShowcaseDetail({postDeatils}) {
  console.log('postDeatils', postDeatils)
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
                    {postDeatils && postDeatils?.additionalImages && postDeatils?.additionalImages.map((image, key)=>{
                      return(
                        <SwiperSlide key={image?.asset?._id}>
                          <div className="project-images">
                          <Image
                            src={image?.asset?.url}
                            alt={postDeatils?.title}
                            width={0}
                            height={0}
                            sizes="100vw"
                          ></Image>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </Grid>
                <Grid item xs={5}>
                  <div className="project-detail">
                    {postDeatils?.title &&<h3>{postDeatils?.title}</h3>}
                    {postDeatils?.type && <div className="sub-title">{postDeatils?.type}</div>}
                    
                    <BlockContent
                        blocks={postDeatils?.body}
                        projectId="rnh21rzn"
                        dataset="production"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
    </>
  );
}

export default ProjectShowcaseDetail;
