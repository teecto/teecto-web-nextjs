import Contact from "@/components/Contact";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "@/components/projectCard/ProjectCard";
import sanityClient from "../../../../client";

export default async function Portfolio({params}) {
    const query = `*[_type == "post" && references("${params.cat_id}")] {
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
      const queryTechnology = `
      *[_type == "technology"] {
        _id,
        name,
        "image": image.asset -> {
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
      }
    `;
      const posts = await sanityClient.fetch(query);
      const technologies = await sanityClient.fetch(queryTechnology)
  return (
    <>
      <div className="subPage-body">
        <Container>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
             <Typography variant="h6" color={'#fff'}> Projects of {decodeURIComponent(params?.cat_name)} </Typography>
            </Box>
            <div className="showcase-wrapper">
            <Grid container spacing={3}>
              {posts && posts.length>0 && posts.map((post, key)=>{
                return(
                  <Grid key={post?._id} item lg={4} md={4} sm={6} xs={12}>
                    <ProjectCard key={post._id} post={post}  technologies={technologies} />
                  </Grid>
                )
              })}
              </Grid>
            </div>
        </Container>
        <Contact />
      </div>
    </>
  );
}
