import AppHeader from "@/components/AppHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicShowcase from "@/components/servicePageComponent/webDevelopment/WebDevelopmentShowcase";
import WebDevelopment from "@/components/servicePageComponent/webDevelopment/WebDevelopment";
import { Container } from "@mui/material";
import UiUx from "@/components/servicePageComponent/uiUx/UiUx";
import UiUxShowcase from "@/components/servicePageComponent/uiUx/UiUxShowcase";
import Motion from "@/components/servicePageComponent/motion/Motion";
import MotionShowcase from "@/components/servicePageComponent/motion/MotionShowcase";

export default function motionGraphic() {
  return (
    <>
      <div className="subPage-body">
        <Container>
          <AppHeader />
          <Motion/>
        </Container>

        <div className="service-showcase">
          <Container>
            <MotionShowcase/>
          </Container>
        </div>
        <Contact />
      </div>
      
      <Footer />
    </>
  );
}
