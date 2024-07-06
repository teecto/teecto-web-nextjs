import AppHeader from "@/components/AppHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Container } from "@mui/material";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Portfolio() {
  return (
    <>
      <div className="subPage-body">
        <Container>
          <AppHeader />
         <ProjectShowcase/>
        </Container>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
