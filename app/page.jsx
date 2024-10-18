// import Image from "next/image";
import Hero from "./components/modules/hero";
import SkillsAndAbilities from "./components/modules/skills-and-abilities";
import WorkHistory from "./components/modules/work-history";
import Welcome from "./components/modules/welcome";
import WorkSamples from "./components/modules/work-samples";
import Themes from "./components/modules/themes";
import Typesheet from "./components/modules/type-sheet/type-sheet";
import TextBlock from "./components/modules/text-block";

function Home(){
	return(
		<main>
			<Hero/>
			<Welcome/>
			<TextBlock text="I call myself a design engineer because I like to occupy the intersection of visual design and web development. I find the two disciplines equally captivating."/>
			<SkillsAndAbilities/>
			<Themes/>
			<WorkSamples/>
			<WorkHistory/>
		</main>
	)
}

export default Home;