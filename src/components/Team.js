"use client";
import React, { useRef, useState } from "react";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../assets/css/swiper.css";
import "../assets/css/effect-cards.css";
import "../assets/css/pagination.css";
// import required modules

import { Autoplay, Pagination, EffectCards } from "swiper/modules";

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
                      <img src='images/shahin.webp' alt="" />
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
                        <img src='images/vue.png' alt="" />
                        <span>Vue Js </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/next.png' alt="" />
                        <span> Nuxt Js</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/node.png' alt="" />
                        <span> Node Js</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/vuetify.png' alt="" />
                        <span> Vuetify </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/javascript.png' alt="" />
                        <span> Javascript  </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/firebase.png' alt="" />
                        <span> Firebase </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/git.png' alt="" />
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
                        <img src='images/react.png' alt="" />
                        <span>React Js </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/next.png' alt="" />
                        <span> Next Js</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/node.png' alt="" />
                        <span> Node Js</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/sass.png' alt="" />
                        <span> SASS</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/metarial.png' alt="" />
                        <span> Metarial UI </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/javascript.png' alt="" />
                        <span> Javascript  </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/git.png' alt="" />
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
                        <img src='images/react.png' alt="" />
                        <span>React Js </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/vue.png' alt="" />
                        <span> Vue Js</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/sass.png' alt="" />
                        <span> SASS</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/jquery.png' alt="" />
                        <span> Jquery</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/ant.png' alt="" />
                        <span> Ant Design</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/metarial.png' alt="" />
                        <span> Metarial UI </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/figma.png' alt="" />
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
                        <img src='images/figma.png' alt="" />
                        <span> Figma </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/xd.png' alt="" />
                        <span>Adobe XD </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/photoshop.png' alt="" />
                        <span> Adobe Photoshop</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/ai.png' alt="" />
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/canva.png' alt="" />
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
                        <img src='images/photoshop.png' alt="" />
                        <span>Adobe Photoshop </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/ai.png' alt="" />
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/ae.png' alt="" />
                        <span> Adobe After Effect</span>
                      </div>
                      <div className="intense-img">
                        <img src='images/pr.png' alt="" />
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
                        <img src='images/photoshop.png' alt="" />
                        <span>Adobe Photoshop </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/ai.png' alt="" />
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                        <img src='images/adobe-xd.png' alt="" />
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
