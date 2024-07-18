import React from "react";
import Image from "next/image";

function ShowcaseCardOne({ title, detail, img }) {
  return (
    <>
      <div className="service-box">
        <div className="box-content">
          <h4> {title} </h4>
          <p> {detail} </p>
        </div>
        <div className="box-img">
          <div className="intense-img">
            <Image
              src={img}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowcaseCardOne;
