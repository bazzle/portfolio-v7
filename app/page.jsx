import Hero from "./ui/modules/Hero";
import SkillsAndAbilities from "./ui/modules/SkillsAndAbilities";
import WorkHistory from "./ui/modules/WorkHistory";
import Welcome from "./ui/modules/Welcome";
import WorkSamples from "./ui/modules/WorkSamples";
import Themes from "./ui/modules/Themes";
import TextBlock from "./ui/modules/TextBlock";
import SignOff from "./ui/modules/SignOff";
import WhatNext from "./ui/modules/WhatNext";



function Home(){
	return(
		<main>
			<Hero/>
			<Welcome/>
			<TextBlock itemIndex={0}/>
			<SkillsAndAbilities/>
			<TextBlock itemIndex={0}/>
			<Themes/>
			<WorkSamples/>
			<WorkHistory/>
			<WhatNext/>
			<SignOff/>
		</main>
	)
}

export default Home;