import React from "react";
import { Container } from "@mui/material";

function Process() {
  return (
    <>
      <div className="process">
        <div className="process-header">
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
              <span>Process</span> We Follow
            </h2>
            <p>
              We develop the best quality website that serves for the long-term.
              Well-documented, <br /> clean, easy and elegant interface helps
              any non-technical clients.
            </p>
          </Container>
        </div>

        <Container>
          <div className="process-wrapper" data-aos="fade-up" data-aos-duration="2000">
            <div className="qreate-process-item">
              <div className="qreate-process-content">
                <div className="qreate-number">01</div>
                <h4 className="qreate-title">Research, Strategy </h4>
                <p>
                    We at TechIT Research and Monitor content reach. Whether it
                    be through social media, online communities, or blogging
                    platforms.
                  </p>
              </div>
            </div>
            <div className="qreate-process-item">
              <div className="qreate-process-content">
                <div className="qreate-number">02</div>
                <h4 className="qreate-title">Design, Production </h4>
                <p>When it comes to graphic design, the goal is to be as eye-catching as possible while representing your business and values in a very clear format.</p>
              </div>
            </div>
            <div className="qreate-process-item">
              <div className="qreate-process-content">
                <div className="qreate-number">03</div>
                <h4 className="qreate-title">Launch, Deliver </h4>
                <p>After developing, custom designing, content creation, we display you the very final product. And as soon as approved, we release the website onto the server.  </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Process;
