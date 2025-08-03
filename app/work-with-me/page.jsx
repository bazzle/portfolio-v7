import Hero2 from "@/app/ui/modules/Hero2";
import SignOff from "@/app/ui/modules/SignOff";
import StdContentTemplate from "@/app/ui/modules/StdContentTemplate";
// content import
import {ContentSection2} from '@/app/content/BodyContent';

export const metadata = {
  title: "Barry Richards Design tinkerer - Work with me",
};

function WorkWithMe() {
	return (
		<main>
			<Hero2/>
			<StdContentTemplate
				title={ContentSection2.title}
				bodyContent={ContentSection2.bodyContent()}
			/>
			<StdContentTemplate
				title={ContentSection2.title}
				bodyContent={ContentSection2.bodyContent()}
				deepMbLine
			/>
			<SignOff/>
		</main>
	);
}

export default WorkWithMe;
