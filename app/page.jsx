import Hero from "./ui/modules/Hero";
import SkillsAndAbilities from "./ui/modules/SkillsAndAbilities";
import WorkHistory from "./ui/modules/WorkHistory";
import Welcome from "./ui/modules/Welcome";
import WorkSamples from "./ui/modules/WorkSamples";
import Themes from "./ui/modules/Themes";
import TextBlock from "./ui/modules/TextBlock";
import SignOff from "./ui/modules/SignOff";
import WhatNext from "./ui/modules/WhatNext";
import Cards from "./ui/modules/Cards";



function Home(){
	return(
		<main>
			<Hero/>
			<Welcome/>
			<TextBlock itemIndex={0}/>
			<SkillsAndAbilities/>
			<TextBlock itemIndex={1}/>
			<Themes/>
			<WorkSamples/>
			<WorkHistory/>
			<WhatNext/>
			<Cards/>
			<SignOff/>
		</main>
	)
}

export default Home;