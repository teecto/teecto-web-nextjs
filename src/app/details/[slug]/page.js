import Contact from "@/components/Contact";
import { Container } from "@mui/material";
import ProjectShowcaseDetail from "@/components/projectShowcase/ProjectShowcaseDetail";
import sanityClient from "../../../client";
import Image from "next/image";
import bgShape from "../../../../public/images/background-shape-svg.png";

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
  console.log('postDeatils', postDeatils)
  return (
    <>
      <div className="subPage-body">
        <div className="background-shape">
          <Image src={bgShape} height='' width='' alt=''></Image>
        </div>
        <Container>
          <ProjectShowcaseDetail postDeatils={postDeatils}/>
        </Container>
        <Contact />
      </div>
    </>
  );
}
