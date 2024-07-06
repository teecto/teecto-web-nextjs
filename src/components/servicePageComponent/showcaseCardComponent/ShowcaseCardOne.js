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
          <Image src={img} alt={title}></Image>
        </div>
      </div>
    </>
  );
}

export default ShowcaseCardOne;
