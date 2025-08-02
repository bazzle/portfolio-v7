import Hero from "@/app/ui/modules/Hero";
import SkillsAndAbilities from "@/app/ui/modules/SkillsAndAbilities";
import WorkHistory from "@/app/ui/modules/WorkHistory";
import Welcome from "@/app/ui/modules/Welcome";
import WorkSamples from "@/app/ui/modules/WorkSamples";
import Themes from "@/app/ui/modules/Themes";
import TextBlock from "@/app/ui/modules/TextBlock";
import SignOff from "@/app/ui/modules/SignOff";
import WhatNext from "@/app/ui/modules/WhatNext";
import Cards from "@/app/ui/modules/Cards";



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