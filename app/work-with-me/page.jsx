import Hero2 from "@/app/ui/modules/Hero2";
import SignOff from "@/app/ui/modules/SignOff";
import ContentSection from "@/app/ui/modules/ContentSection";
// content import
import {ContentSection2} from '@/app/content/BodyContent';

export const metadata = {
  title: "Barry Richards Design tinkerer - Work with me",
};

function WorkWithMe() {
	return (
		<main>
			<Hero2/>
			<ContentSection
				title={ContentSection2.title}
				bodyContent={ContentSection2.bodyContent()}
			/>
			<ContentSection
				title={ContentSection2.title}
				bodyContent={ContentSection2.bodyContent()}
				deepMbLine
			/>
			<SignOff/>
		</main>
	);
}

export default WorkWithMe;
