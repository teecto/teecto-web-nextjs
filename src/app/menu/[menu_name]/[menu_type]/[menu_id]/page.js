import Contact from "@/components/Contact";
import { Container } from "@mui/material";
import sanityClient from "../../../../../client";
import ServiceDetails from "@/components/servicePageComponent/ServiceDetails";
import ServiceShowcase from "@/components/servicePageComponent/ServiceShowcase";

async function getSingleNavData(params) {
  var type;
  if (params?.menu_type === "main") {
    type = "navItem";
  } else {
    type = "navSubItem";
  }
  const query = `
   *[_type == "${type}" && _id == $id]{
      _id,
      title,
      description,
      "images": tools[] {
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
    }| order(publishedAt desc)
  `;
  const res = await sanityClient.fetch(query, { id: params.menu_id });
  return res;
}

const getNavPostsData = async (params) => {
    const query = `
    *[_type == "navProject" && navItem._ref == $menu_id]{
      _id,
      title,
      description,
      "image": image{
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
    }| order(publishedAt desc)
  `;

  const res = await sanityClient.fetch(query, { menu_id: params.menu_id });
  return res;
  };



export default async function Menu({ params }) {
  const menuDetails = await getSingleNavData(params);
  const menuPosts = await getNavPostsData(params);
  return (
    <>
      <div className="subPage-body">
        <div className="background-shape">
          <img src="images/background-shape-svg.png" alt="" />
        </div>
        <Container>
          <ServiceDetails details={menuDetails[0]} />
        </Container>

        <div className="service-showcase">
          <Container>
            <ServiceShowcase menuPosts={menuPosts} />
          </Container>
        </div>
        <Contact />
      </div>
    </>
  );
}
