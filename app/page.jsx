// import Image from "next/image";

import Hero from "./components/modules/hero";
import SkillsAndAbilities from "./components/modules/skills-and-abilities";
import Status from "./components/components/status";
import Typesheet from "./components/modules/type-sheet";
import WorkHistory from "./components/modules/work-history";


function Home(){
	return(
		<main>
			<Hero/>
			<SkillsAndAbilities/>
			<Status/>
			<WorkHistory/>
			<Typesheet/>
		</main>
	)
}

export default Home;