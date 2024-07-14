import AppHeader from "@/components/AppHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicShowcase from "@/components/servicePageComponent/webDevelopment/WebDevelopmentShowcase";
import WebDevelopment from "@/components/servicePageComponent/webDevelopment/WebDevelopment";
import { Container } from "@mui/material";
import UiUx from "@/components/servicePageComponent/uiUx/UiUx";
import UiUxShowcase from "@/components/servicePageComponent/uiUx/UiUxShowcase";
import Graphic from "@/components/servicePageComponent/graphic/Graphic";
import GraphicShowcase from "@/components/servicePageComponent/graphic/GraphicShowcase";

export default function graphicDesign() {
  return (
    <>
      <div className="subPage-body">
        <div className="background-shape">
          <img src="images/background-shape-svg.png" alt="" />
        </div>
        <Container>
          <AppHeader />
          <Graphic />
        </Container>

        <div className="service-showcase">
          <Container>
            <GraphicShowcase />
          </Container>
        </div>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
