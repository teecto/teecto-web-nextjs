import AppHeader from "@/components/AppHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicShowcase from "@/components/servicePageComponent/webDevelopment/WebDevelopmentShowcase";
import WebDevelopment from "@/components/servicePageComponent/webDevelopment/WebDevelopment";
import { Container } from "@mui/material";
import WebDevelopmentShowcase from "@/components/servicePageComponent/webDevelopment/WebDevelopmentShowcase";

export default function webDevelopment() {
  return (
    <>
      <div className="subPage-body">
      <div className="background-shape">
        <img src="images/background-shape-svg.png" alt="" />
      </div>
        <Container>
          <AppHeader />
          <WebDevelopment />
        </Container>

        <div className="service-showcase">
          <Container>
            <WebDevelopmentShowcase />
          </Container>
        </div>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
