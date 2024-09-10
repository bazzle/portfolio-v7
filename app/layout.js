import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer";

export const metadata = {
  title: "Barry Richards",
  description: "Web Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
		<Header/>
        {children}
		<Footer/>
      </body>
    </html>
  );
}
