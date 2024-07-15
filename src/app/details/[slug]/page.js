import AppHeader from "@/components/AppHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicShowcase from "@/components/servicePageComponent/webDevelopment/WebDevelopmentShowcase";
import WebDevelopment from "@/components/servicePageComponent/webDevelopment/WebDevelopment";
import { Container } from "@mui/material";
import UiUx from "@/components/servicePageComponent/uiUx/UiUx";
import UiUxShowcase from "@/components/servicePageComponent/uiUx/UiUxShowcase";
import ProjectShowcaseDetail from "@/components/projectShowcase/ProjectShowcaseDetail";
import sanityClient from "../../../client";


export default async function ShowcaseDetail({params}){
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    type,
    "additionalImages": additionalImages[] {
      asset -> {
        _id,
        url,
        alt,
        caption,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    categories,
    technologies,
    link,
    tags,
    body,
    publishedAt
  }`;
  const postDeatils = await sanityClient.fetch(query, { slug: params.slug });
  return (
    <>
      <div className="subPage-body">
        <div className="background-shape">
          <img src="images/background-shape-svg.png" alt="" />
        </div>
        <Container>
          <AppHeader />
          <ProjectShowcaseDetail postDeatils={postDeatils}/>
        </Container>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
