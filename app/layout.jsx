import "./assets/styles/main.scss";
import Header from "./components/modules/header";
import Footer from "./components/modules/footer";

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
