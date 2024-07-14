import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
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
        additionalImages,
        "categories":*[_type == "category" && references(^._id)] | order(publishedAt desc){
          title,
          description
        },
        "technologies": *[_type == "technology" && references(^._id)] | order(publishedAt desc) {
          name,
          image
        },
        link,
        tags,
        body,
        publishedAt
      }
    }
  `;
  const res = await sanityClient.fetch(query,{ next: { revalidate: 3600 }})
  return res
}


export default async function Home() {
  const categories = await getAllCategoriesData()
    return (
      <>
        <AppHeader/>
        <Hero/>
        <MemberIntro categories={categories}/>
        <Footer/>
      </>
    );
  }
  