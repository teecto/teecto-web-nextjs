import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";

function ReviewCard(props) {
    const {title,number,img} = props
  return (
    <>
      <div className="review-card">
        <div className="card-icon">
          <Image src={img} height='' width='' alt={title}></Image>
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <h4>{number}</h4>
        </div>
        <i>
          <ChevronRightIcon />
        </i>
      </div>
    </>
  );
}

export default ReviewCard;
