import Hero2 from "@/app/ui/modules/Hero2";
import StdContentTemplate from "@/app/ui/modules/StdContentTemplate";
import TextStandout from "@/app/ui/modules/TextStandout";
// content import
import {
	ContentSection2,
	ContentSection3,
	TextStandout3,
	TextStandout4
} from '@/app/content/BodyContent';

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
			<TextStandout content={TextStandout4} deepMbline line/>
			<StdContentTemplate
				title={ContentSection3.title}
				bodyContent={ContentSection3.bodyContent()}
				deepMbLine
			/>
			<TextStandout content={TextStandout3}/>
		</main>
	);
}

export default WorkWithMe;
