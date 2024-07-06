import React from "react";
import { Container, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contact() {
  return (
    <>
      <div className="contact">
        <Container>
          <div className="contact-wrapper" data-aos="fade-up" data-aos-duration="2000">
            <Grid container spacing={2} alignItems="center">
              <Grid item lg={5} md={5} xs={12}>
                <div className="contact-content">
                  <div className="section-subtitle">Contact</div>
                  <h2>
                    Have You Any Project? <br /> Please Drop a Message
                  </h2>
                  <p>
                    Get in touch and let me know how i can help. Fill out the
                    form and i’ll be in touch as soon as possible.
                  </p>
                  <div className="contact-info">
                    <div className="info-item">
                      <i>
                        <WhatsAppIcon />
                      </i>
                      <div className="info-contant">
                        <h4>WhatsApp</h4>
                        <p>+88 01643984584</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <i>
                        <MailIcon />
                      </i>
                      <div className="info-contant">
                        <h4>E-mail</h4>
                        <p>info@gmail.com</p>
                        <p>fasmeeeu@gmail.com</p>
                        <ul>
                          <li>
                            <a href="#">
                              <FacebookIcon />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <TwitterIcon />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/teectoit">
                              <LinkedInIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={7} md={7} xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={6}>
                    <div className="market-info">
                      <img src='images/fiver.webp' alt="" />
                      <h3> TEECTO </h3>
                      <p>
                        If you're interested in working on the Fiverr platform,
                        you can get in touch by clicking on this link.
                      </p>
                      <a href="#">
                        <button className="market-button">
                          Click Here
                        </button>
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="market-info">
                      <img src='images/upwork.webp' alt="" />
                      <h3> TEECTO </h3>
                      <p>
                        If you're interested in working on the Upwork platform,
                        you can get in touch by clicking on this link.
                      </p>
                      <a href="#">
                        <button className="market-button">
                          Click Here
                        </button>
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
