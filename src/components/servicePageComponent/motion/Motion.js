import React from "react";
import SkillCard from "@/components/hero/SkillCard";
import { Grid } from "@mui/material";
import photoshop from "../../../../public/images/photoshop.png";
import ai from "../../../../public/images/ai.png";
import pr from "../../../../public/images/pr.png";
import ae from "../../../../public/images/ae.png";

const uiToolList = [
  { title: "Adobe Photoshop", img: photoshop },
  { title: "Adobe Illestator", img: ai },
  { title: "Adobe Premiere Pro", img: pr },
  { title: "Adobe After Effects", img: ae },
];

function Motion() {
  return (
    <>
      
      <div className="service-page-content">
        <h2>Motion Graphic Design</h2>
        <p>
          Welcome to our Ui/Ux design Service! We're your partners in building
          powerful online experiences that propel your business forward. Through
          user research and meticulous UI/UX design, we craft beautiful,
          user-friendly interfaces that resonate with your target audience. We
          develop user personas to understand their needs and design intuitive
          navigation that guides them effortlessly. Our commitment to responsive
          design ensures your website adapts seamlessly across desktops,
          tablets, and smartphones, prioritizing a mobile-first approach for
          today's digital landscape.
        </p>
      </div>

      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12}>
          <div className="service-icon-content">
            <h4> Design Tools </h4>
            <ul className="skills-list">
              {uiToolList.map((card, key) => {
                return (
                  <SkillCard key={key} title={card.title} img={card.img} />
                );
              })}
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Motion;
