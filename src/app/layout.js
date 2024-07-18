import "../assets/css/style.css"
import "../assets/css/responsive.css"
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import sanityClient from "../client"


export const metadata = {
  title: "Teecto",
  description: "Transform your vision into reality",
};

async function getAllNavsData() {
  const query = `*[_type == "navItem"] {
    _id,
    title,
    description,
    tools,
    "navSubItems": *[_type == "navSubItem" && references(^._id)] {
      _id,
      title,
      description,
      tools
    }
  }`;
  const res = await sanityClient.fetch(query,{ next: { revalidate: 3600 }})
  return res
}

export default async function RootLayout({ children }) {
  const navs = await getAllNavsData()
  return (
    <html lang="en">
      <AppHeader navs={navs} />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
