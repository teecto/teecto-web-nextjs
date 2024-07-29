"use client";
import Image from "next/image";
import React, { Fragment } from "react";


function ServiceImage({menuPosts}) {
  console.log('menuPosts', menuPosts)
  return (
    <div className="service-showcase-container">
            <Image
                src={menuPosts?.image?.asset?.url}
                alt={menuPosts?.title}
                width={500}
                height={500}
                sizes="100vw">
              </Image>
    </div>
  );
}

export default ServiceImage;
