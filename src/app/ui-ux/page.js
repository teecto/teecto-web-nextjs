import AppHeader from "@/components/AppHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicShowcase from "@/components/servicePageComponent/webDevelopment/WebDevelopmentShowcase";
import WebDevelopment from "@/components/servicePageComponent/webDevelopment/WebDevelopment";
import { Container } from "@mui/material";
import UiUx from "@/components/servicePageComponent/uiUx/UiUx";
import UiUxShowcase from "@/components/servicePageComponent/uiUx/UiUxShowcase";

export default function uiUx() {
  return (
    <>
      <div className="subPage-body">
        <div className="background-shape">
          <img src="images/background-shape-svg.png" alt="" />
        </div>
        <Container>
          <AppHeader />
          <UiUx />
        </Container>

        <div className="service-showcase">
          <Container>
            <UiUxShowcase />
          </Container>
        </div>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
