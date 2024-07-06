import React from "react";
import Image from "next/image";


function ServiceCard(props) {
  const  {title,img,detail} = props
  return (
    <>
      <div class="service-wrap">
        <div class="service-icon">
          {/* <img src={img} alt="" /> */}
          <Image src={img} height='' width='' alt={title}></Image>
        </div>
        <h4> {title} </h4>
        <p>
          {detail}
        </p>
      </div>
    </>
  );
}

export default ServiceCard;
