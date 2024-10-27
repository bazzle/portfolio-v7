// import Image from "next/image";
import Hero from "./components/modules/hero";
import SkillsAndAbilities from "./components/modules/skills-and-abilities";
import WorkHistory from "./components/modules/work-history";
import Welcome from "./components/modules/welcome";
import WorkSamples from "./components/modules/work-samples";
import Themes from "./components/modules/themes";
import Typesheet from "./components/modules/type-sheet/type-sheet";
import TextBlock from "./components/modules/text-block";
import SignOff from "./components/modules/sign-off";
import { ColorThemeProvider } from "./context/color-theme";

function Home(){
	return(
		<main>
			<ColorThemeProvider>
				<Hero/>
				<Welcome/>
				<TextBlock text="I call myself a design engineer because I like to occupy the intersection of visual design and web development. I find the two disciplines equally captivating."/>
				<SkillsAndAbilities/>
				<Themes/>
				<WorkSamples/>
				<WorkHistory/>
				<SignOff/>
			</ColorThemeProvider>
		</main>
	)
}

export default Home;