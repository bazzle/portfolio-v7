import Hero2 from "@/app/ui/modules/Hero2";
import StdContentTemplate from "@/app/ui/modules/StdContentTemplate";
import TextStandout from "@/app/ui/modules/TextStandout";
// content import
import {
	ContentSection1,
	ContentSection2,
	TextStandout1,
	TextStandout2,
	GetInTouchContent
} from '@/app/content/workWithMeInContent';

export const metadata = {
  title: "Barry Richards Design tinkerer - Work with me",
};

function WorkWithMe() {
	return (
		<main>
			<Hero2/>
			<StdContentTemplate
				title={ContentSection1.title}
				bodyContent={ContentSection1.bodyContent()}
			/>
			<TextStandout content={TextStandout1} deepMbLine line/>
			<StdContentTemplate
				title={ContentSection2.title}
				bodyContent={ContentSection2.bodyContent()}
			/>
			<StdContentTemplate
				id="get-in-touch"
				title={GetInTouchContent.title}
				bodyContent={GetInTouchContent.bodyContent()}
				deepMbLine
			/>
			<TextStandout content={TextStandout2}/>
		</main>
	);
}

export default WorkWithMe;
