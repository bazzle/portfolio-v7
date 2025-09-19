import "@/app/assets/styles/main.scss";
import Header from "@/app/ui/modules/Header";
import Footer from "@/app/ui/modules/Footer";

export const metadata = {
  title: "Barry Richards Design tinkerer",
  description: "Web designer, developer and accessibility consultant from the UK. My philosophy is Web for Everyone but still POP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<head>
			<link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
		</head>
    	<body className="body">
			<Header/>
        	{children}
			<Footer/>
      	</body>
    </html>
  );
}
