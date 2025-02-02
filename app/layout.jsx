import "./assets/styles/main.scss";
import Header from "./components/modules/header";
import Footer from "./components/modules/footer";
import { ColourThemeProvider } from "./context/colour-theme";
import BackTop from "./components/modules/footer/backtop";

export const metadata = {
  title: "Barry Richards",
  description: "Design engineer from the UK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
		<ColourThemeProvider>
		<Header/>
        {children}
		<Footer/>
		</ColourThemeProvider>
		<BackTop/>
      </body>
    </html>
  );
}
