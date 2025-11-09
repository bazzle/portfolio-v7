import "@/app/assets/styles/main.scss";
import Footer from "@/app/ui/modules/Footer";
import { HomepageCheckProvider } from "@/app/context/HomepageCheck"

export const metadata = {
  title: "Barry Richards Design tinkerer",
  description: "Web designer, developer and accessibility consultant from the UK. My philosophy is Web for Everyone but still POP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behaviour="smooth">
		<head>
			<link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
			<link rel="stylesheet" href="https://use.typekit.net/sqp3jyo.css"></link>
		</head>
		<HomepageCheckProvider>
			<body className="body">
				{children}
				<Footer/>
			</body>
		</HomepageCheckProvider>
    </html>
  );
}
