"use client";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PhoneIcon from "@mui/icons-material/Phone";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import AOS from "aos";
import "aos/dist/aos.css";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";

const AppHeader = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className="app-header">
        <Container>
          <div
            className="app-header-wrapper"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Link href="/">
              <div className="logo">
                <Image src={logo} alt="teecto-logo"></Image>
              </div>
            </Link>
            <div className="nav-list  sm-d-none">
              <ul>
                <li>
                  <Link href="/portfolio">
                     <ContactSupportIcon /> Protfolios
                  </Link>
                </li>
                <li className="dropdown-relative">
                  <a href="#">
                    <HandymanIcon /> Service <ArrowDropDownIcon />
                  </a>
                  <div className="dropdown-plate">
                    <ul>
                      <li>
                        <Link href="/web-development">
                          <ArrowRightIcon /> Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/ui-ux">
                          <ArrowRightIcon /> Ui/Ux Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/graphic-design">
                          <ArrowRightIcon /> Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/motion-graphic">
                          <ArrowRightIcon /> 2D/3D Motion Graphic
                        </Link>
                      </li>
                      <li>
                        <Link href="/404">
                          <ArrowRightIcon /> Bug Fix
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <PublishedWithChangesIcon /> Work Process
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GroupIcon /> Our Team
                  </a>
                </li>
                <button className="conatct-btn">
                  <PhoneIcon /> Contact
                </button>
              </ul>
            </div>

            <div className="hamburger" onClick={toggleDrawer(true)}>
              <ClearAllIcon />
            </div>
          </div>
        </Container>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="drawe-content">
          <div className="drawer-logo">
            <Image src={logo} alt="teecto-logo"></Image>
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <a href="#">
                  <ContactSupportIcon /> About
                </a>
              </li>
              <li>
                <a href="#">
                  <HandymanIcon /> Service
                </a>
              </li>
              <li>
                <a href="#">
                  <PublishedWithChangesIcon /> Work Process
                </a>
              </li>
              <li>
                <a href="#">
                  <GroupIcon /> Our Team
                </a>
              </li>
              <button className="conatct-btn">
                <PhoneIcon /> Contact
              </button>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;
