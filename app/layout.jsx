import "./assets/styles/main.scss";
import Header from "./components/modules/header";
import Footer from "./components/modules/footer";
import { ColourThemeProvider } from "./context/colour-theme";

export const metadata = {
  title: "Barry Richards",
  description: "Web Engineer",
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
      </body>
    </html>
  );
}
