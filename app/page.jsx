// import Image from "next/image";
import Hero from "./components/modules/hero";
import SkillsAndAbilities from "./components/modules/skills-and-abilities";
import WorkHistory from "./components/modules/work-history";
import Welcome from "./components/modules/welcome";
import WorkSamples from "./components/modules/work-samples";
import Themes from "./components/modules/themes";

function Home(){
	return(
		<main>
			<Hero/>
			<Welcome/>
			<SkillsAndAbilities/>
			<Themes/>
			<WorkHistory/>
		</main>
	)
}

export default Home;