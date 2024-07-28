"use client";
import React, { useRef, useState } from "react";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import shahin from "../../public/images/shahin.webp";
import vue from "../../public/images/vue-js.png";
import nuxt from "../../public/images/nuxt-js.png";
import node from "../../public/images/node-js.png";
import vuitify from "../../public/images/vuetify.png";
import javascript from "../../public/images/javascript.png";
import firebase from "../../public/images/firebase.png";
import git from "../../public/images/git.png";
import react from "../../public/images/react-js.png";
import next from "../../public/images/next-js.png";
import mui from "../../public/images/metarial-ui.png";
import sass from "../../public/images/sass.png";
import ant from "../../public/images/ant.png";
import figma from "../../public/images/figma.png";
import jquery from "../../public/images/jquery.png";
import xd from "../../public/images/adobe-xd.png";
import ai from "../../public/images/ai.png";
import photoshop from "../../public/images/photoshop.png";
import canva from "../../public/images/canva.png";
import ae from "../../public/images/ae.png";
import pr from "../../public/images/pr.png";


// Import Swiper styles
import "../assets/css/swiper.css";
import "../assets/css/effect-cards.css";
import "../assets/css/pagination.css";
// import required modules

import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import Image from "next/image";

function Team() {
  return (
    <>
      <div className="team">
        <Container>
          <div className="team-heading">
            <h2>Our Dynamic Team: </h2>
            <h3> Unveiling the Powerhouse Behind Our Success</h3>
          </div>
          <div className="team-wrapper">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[ Autoplay ,EffectCards, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile shaheen-profile">
                        <Image src={shahin} height='' width='' alt=''></Image>
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Shahin Alam </h2>
                    <h4>Senior Software Engineer</h4>
                    <p>" Enthusiastic full-stack developer with 5+ years of
                      experience crafting web applications. Skilled in
                      JavaScript frameworks (React, Angular) and back-end
                      languages (Python, Java). Proven ability to design,
                      develop, and deploy scalable solutions. "
                    </p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                        <Image src={vue} height='' width='' alt=''></Image>
                        <span>Vue Js </span>
                      </div>
                      <div className="intense-img">
                         <Image src={nuxt} height='' width='' alt=''></Image>
                        <span> Nuxt Js</span>
                      </div>
                      <div className="intense-img">
                         <Image src={node} height='' width='' alt=''></Image>
                        <span> Node Js</span>
                      </div>
                      <div className="intense-img">
                         <Image src={vuitify} height='' width='' alt=''></Image>
                        <span> Vuetify </span>
                      </div>
                      <div className="intense-img">
                       <Image src={javascript} height='' width='' alt=''></Image>
                        <span> Javascript  </span>
                      </div>
                      <div className="intense-img">
                        <Image src={firebase} height='' width='' alt=''></Image>
                        <span> Firebase </span>
                      </div>
                      <div className="intense-img">
                        <Image src={git} height='' width='' alt=''></Image>
                        <span> Git  </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile naeem-profile">
                      <img src='images/naeem.webp' alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Azmir Hossen </h2>
                    <h4>Software Developer</h4>
                    <p>" As a Software Developer working with 2+ years of
                      experience in front-end development, specializing in
                      React, Next.js. Proven track record of delivering scalable
                      solutions. Collaborative team player with a focus on code
                      quality and performance. Passionate about staying current
                      with industry trends. Ready to bring expertise to dynamic
                      projects. "
                    </p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                      <Image src={react} height='' width='' alt=''></Image>
                        <span>React Js </span>
                      </div>
                      <div className="intense-img">
                      <Image src={next} height='' width='' alt=''></Image>
                        <span> Next Js</span>
                      </div>
                      <div className="intense-img">
                         <Image src={node} height='' width='' alt=''></Image>
                        <span> Node Js</span>
                      </div>
                      <div className="intense-img">
                      <Image src={sass} height='' width='' alt=''></Image>
                        <span> SASS</span>
                      </div>
                      <div className="intense-img">
                      <Image src={mui} height='' width='' alt=''></Image>
                        <span> Metarial UI </span>
                      </div>
                      <div className="intense-img">
                      <Image src={javascript} height='' width='' alt=''></Image>
                        <span> Javascript  </span>
                      </div>
                      <div className="intense-img">
                      <Image src={git} height='' width='' alt=''></Image>
                        <span> Git  </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile fahim-profile">
                      <img src='images/fahim.webp' alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Fahim Ahmed </h2>
                    <h4> Front-end Developer</h4>
                    <p>" I'm a passionate web developer with experience in building
                      user interfaces using both React.js and Vue.js.I'm always
                      eager to learn and explore new technologies.From design to
                      development, I've got you covered. I leverage Figma for
                      UI/UX design, and implement it all using React.js or
                      Vue.js to create stunning and functional web applications. "
                    </p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                      <Image src={react} height='' width='' alt=''></Image>
                        <span>React Js </span>
                      </div>
                      <div className="intense-img">
                      <Image src={vue} height='' width='' alt=''></Image>
                        <span> Vue Js</span>
                      </div>
                      <div className="intense-img">
                      <Image src={sass} height='' width='' alt=''></Image>
                        <span> SASS</span>
                      </div>
                      <div className="intense-img">
                      <Image src={jquery} height='' width='' alt=''></Image>
                        <span> Jquery</span>
                      </div>
                      <div className="intense-img">
                      <Image src={ant} height='' width='' alt=''></Image>
                        <span> Ant Design</span>
                      </div>
                      <div className="intense-img">
                      <Image src={mui} height='' width='' alt=''></Image>
                        <span> Metarial UI </span>
                      </div>
                      <div className="intense-img">
                      <Image src={figma} height='' width='' alt=''></Image>
                        <span> Figma UI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile shuvo-profile">
                      <img src='images/shuvo.webp' alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> TahSeen AL ShuVo </h2>
                    <h4> UI/UX & Graphic Designer</h4>
                    <p>" I'm a passionate UI and UX designer with 2 years of experience in crafting engaging digital experiences. I thrive on creating intuitive interfaces that seamlessly blend aesthetics with functionality. My journey in the design world has been driven by a constant quest for innovation and a deep commitment to delivering impactful solutions that delight users. "</p>
                    <div className="showcase-intense">
                    <div className="intense-img">
                        <Image src={figma} height='' width='' alt=''></Image>
                        <span> Figma </span>
                      </div>
                      <div className="intense-img">
                      <Image src={xd} height='' width='' alt=''></Image>
                        <span>Adobe XD </span>
                      </div>
                      <div className="intense-img">
                      <Image src={photoshop} height='' width='' alt=''></Image>
                        <span> Adobe Photoshop</span>
                      </div>
                      <div className="intense-img">
                      <Image src={ai} height='' width='' alt=''></Image>
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                      <Image src={canva} height='' width='' alt=''></Image>
                        <span> Canva </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile">
                      <img src='images/manik.webp' alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Md. Manik Prodhan </h2>
                    <h4> Motion Graphics Designer</h4>
                    <p>" Versatile and imaginative creative professional adept at blending graphic design prowess with video editing finesse. Eager to channel my boundless creativity and technical proficiency into a dynamic role where I can craft captivating visual narratives that elevate brands and captivate audiences "</p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                      <Image src={photoshop} height='' width='' alt=''></Image>
                        <span>Adobe Photoshop </span>
                      </div>
                      <div className="intense-img">
                      <Image src={ai} height='' width='' alt=''></Image>
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                      <Image src={ae} height='' width='' alt=''></Image>
                        <span> Adobe After Effect</span>
                      </div>
                      <div className="intense-img">
                      <Image src={pr} height='' width='' alt=''></Image>
                        <span> Adobe Premiere Pro </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile sajid-profile">
                      <img src='images/sajid.webp' alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Rahat Islam </h2>
                    <h4> Brand Identity Creator , Graphics Designer</h4>
                    <p>"Hello, I'm Rahat Islam a dedicated learner and an enthusiastic graphic designer with two year of experience. My journey in graphic design has perfected my eye for aesthetics and enhanced my design skills. I am dedicated to improving my abilities and bringing creative ideas to my work."</p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                        <Image src={photoshop} height='' width='' alt=''></Image>
                        <span>Adobe Photoshop </span>
                      </div>
                      <div className="intense-img">
                      <Image src={ai} height='' width='' alt=''></Image>
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                        <Image src={xd} height='' width='' alt=''></Image>
                        <span>Adobe XD </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            
          </div>
        </Container>
      </div>
    </>
  );
}

export default Team;
