import "../assets/css/style.css"
import "../assets/css/responsive.css"


export const metadata = {
  title: "Teecto",
  description: "Transform your vision into reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
