import React from "react";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ post, technologies }) {
  var storeTechnology = []
  if(technologies && technologies.length>0){
    technologies.forEach(technology => {
      if(post?.technologies && post.technologies.length>0){
          post.technologies.forEach(element => {
          if(element?._ref === technology?._id){
            storeTechnology.push(technology)
          }
        });
      }
    });
  }
  return (
    <>
      <div className="showcase-item">
        <ul className="dot-item">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="showcase-img">
          {post?.additionalImages && post?.additionalImages.length > 0 && (
            <Image
              src={post?.additionalImages[0]?.asset?.url}
              alt={post?.title}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          )}
          <div className="overly">
          <Link href={`/details/${post.slug.current}`}><button>Details</button></Link>
            {post?.link && <a href={post?.link} target="_blank"><button>View Demo</button></a>}
          </div>
        </div>
        <div className="showcase-content">
          {post?.title && <h5>{post?.title}</h5>}
          {post?.type && <h6>{post?.type}</h6>}
          <div className="showcase-intense">
            {storeTechnology && storeTechnology.length>0 && storeTechnology.map((technology, key)=>{
              return(
                <Tooltip key={technology?._id} title={technology?.name} placement="top">
                    <div className="intense-img">
                      <Image
                        src={technology?.image?.url}
                        alt={technology?.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                      ></Image>                    
                      </div>
                  </Tooltip>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
