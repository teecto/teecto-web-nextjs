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

const AppHeader = ({navs}) => {
  AOS.init();

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div className="app-header">
        <Container>
          {/* data-aos="fade-down"
            data-aos-duration="1000" */}
          <div
            className="app-header-wrapper">
            <Link href="/">
              <div className="logo">
                <Image src={logo} alt="teecto-logo"></Image>
              </div>
            </Link>
            <div className="nav-list  sm-d-none">
              <ul>
                <li>
                  <Link href="#">
                     <ContactSupportIcon /> Protfolios
                  </Link>
                </li>
                {navs && navs?.length>0 && navs.map((nav, key)=>{
                 if(nav?.navSubItems && nav?.navSubItems.length>0){
                    return(
                      <li key={nav?._id} className="dropdown-relative">
                      <Link href={`/menu/${nav?.title}/main/${nav?._id}`}>
                        <HandymanIcon /> {nav?.title} <ArrowDropDownIcon />
                      </Link>
                      <div className="dropdown-plate">
                        <ul>
                         {nav?.navSubItems.map((subNav, key)=>{
                          return(
                            <li key={subNav?._id}>
                              <Link href={`/menu/${subNav?.title}/sub/${subNav?._id}`}>
                                <ArrowRightIcon /> {subNav?.title}
                              </Link>
                            </li>
                          )
                         })}
                        </ul>
                      </div>
                    </li>
                    )
                 }else{
                    return(
                      <li>
                        <Link href={`/menu/${nav?.title}/main/${nav?._id}`}>
                          <ContactSupportIcon />{nav?.title} 
                        </Link>
                      </li>
                    )
                 }
                })}
               
                {/* <li>
                  <a href="#">
                    <PublishedWithChangesIcon /> Work Process
                  </a>
                </li> */}
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
