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
import WhatNext from "./components/modules/what-next";

function Home(){
	return(
		<main>
			<Hero/>
			<Welcome/>
			<TextBlock index={0}/>
			<SkillsAndAbilities/>
			<Themes/>
			<WorkSamples/>
			<WorkHistory/>
			<WhatNext/>
			<SignOff/>
		</main>
	)
}

export default Home;