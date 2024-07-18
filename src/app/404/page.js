import Image from "next/image";
import notFound from "../../../public/images/not-found.webp";



export default function NotFound() {
  return (
    <>
      <div className="not-found">
          <Image src={notFound} height='' width='' alt='not-found'></Image>
          <a href="/">
            <div className="home-btn">
                Back To Home
            </div>
          </a>
      </div>
    </>
  );
}
