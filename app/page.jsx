// import Image from "next/image";
import Hero from "./components/modules/hero";
import SkillsAndAbilities from "./components/modules/skills-and-abilities";
import Typesheet from "./components/modules/type-sheet/type-sheet";
import WorkHistory from "./components/modules/work-history";
import Welcome from "./components/modules/welcome";


function Home(){
	return(
		<main>
			<Hero/>
			<Welcome/>
			<SkillsAndAbilities/>
			<WorkHistory/>
			<Typesheet/>
			
		</main>
	)
}

export default Home;