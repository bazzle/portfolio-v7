import "@/app/assets/styles/main.scss";
import Header from "./components/modules/Header/Header";
import Footer from "./components/modules/Footer/Footer";
import { ColourThemeProvider } from "./context/colour-theme";
import BackTop from "./components/modules/Footer/Backtop/Backtop";

export const metadata = {
  title: "Barry Richards Design tinkerer",
  description: "Web designer, developer and accessibility consultant from the UK. My philosophy is Web for Everyone but still POP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    	<body>
			<ColourThemeProvider>
			<Header/>
        	{/* {children} */}
			<Footer/>
			</ColourThemeProvider>
			<BackTop/>
      	</body>
    </html>
  );
}
