import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Berto Blog Programming",
  description:
    "Join me on my journey through the world of web development, programming, and technology. Follow along as I share my experiences, challenges, and learnings in coding, software development, front-end and back-end technologies, JavaScript, React, and other modern frameworks. Gain insights, tips, and tutorials for fellow enthusiasts and developers looking to expand their knowledge and skills in the tech industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
