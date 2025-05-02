import Hero from "./components/modules/Hero/Hero";
// import SkillsAndAbilities from "./components/modules/skills-and-abilities";
import WorkHistory from "./components/modules/WorkHistory/WorkHistory";
import Welcome from "./components/modules/Welcome/Welcome";
import WorkSamples from "./components/modules/WorkSamples/WorkSamples";
import Themes from "./components/modules/Themes/Themes";
import TextBlock from "./components/modules/TextBlock/TextBlock";
import SignOff from "./components/modules/SignOff/SignOff";
import WhatNext from "./components/modules/WhatNext/WhatNext";



function Home(){
	return(
		<main>
			<Hero/>
			<Welcome/>
			<TextBlock itemIndex={0}/>
			{/* 
			<SkillsAndAbilities/>  */}
			<Themes/>
			<WorkSamples/>
			<WorkHistory/>
			<WhatNext/>
			<SignOff/>
		</main>
	)
}

export default Home;