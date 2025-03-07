import "./assets/styles/main.scss";
import Header from "./components/modules/header";
import Footer from "./components/modules/footer";
import { ColourThemeProvider } from "./context/colour-theme";
import BackTop from "./components/modules/footer/backtop";

export const metadata = {
  title: "Barry Richards Design tinkerer",
  description: "Web designer, developer and accessibility consultant from the UK. My philosophy is Web for Everyone but still POP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<head>
			<link rel="preconnect" href="https://use.typekit.net/sqv3apk.css" />
        	<link rel="stylesheet" href="https://use.typekit.net/sqv3apk.css" />
      	</head>
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
