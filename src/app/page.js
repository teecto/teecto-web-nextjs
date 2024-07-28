import Hero from "@/components/hero/Hero";
import MemberIntro from "@/components/MemberIntro";
import sanityClient from "../client";



async function getAllCategoriesData() {
  const query = `
    *[_type == "category"] {
      _id,
      title,
      description,
      "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
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
      }
    }| order(publishedAt desc)
  `;
  const res = await sanityClient.fetch(query,{ next: { revalidate: 3600 }})
  return res
}
async function getAllTechnologyData() {
  const query = `
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
  const res = await sanityClient.fetch(query,{ next: { revalidate: 3600 }})
  return res
}


export default async function Home() {
  const categories = await getAllCategoriesData()
  const technologies = await getAllTechnologyData()
    return (
      <>
        <Hero/>
        <MemberIntro categories={categories} technologies={technologies}/>
      </>
    );
  }
  