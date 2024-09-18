// import Image from "next/image";

import Hero from "./components/modules/Hero";
import SkillsAndAbilities from "./components/modules/Skills-and-abilities";
import Status from "./components/components/Status";
import Typesheet from "./components/modules/Type-sheet";
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