import "@/app/assets/styles/main.scss";
import Header from "./ui/modules/Header";
import Footer from "./ui/modules/Footer";
import BackTop from "./ui/modules/Footer/Backtop";

export const metadata = {
  title: "Barry Richards Design tinkerer",
  description: "Web designer, developer and accessibility consultant from the UK. My philosophy is Web for Everyone but still POP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    	<body>
			<Header/>
        	{children}
			<Footer/>
			<BackTop/>
      	</body>
    </html>
  );
}
