import "./assets/styles/main.scss";
import Header from "./components/modules/Header";
import Footer from "./components/modules/Footer";

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
