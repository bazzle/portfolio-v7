// import Image from "next/image";

import Hero from "./components/Hero";
import SectionHead from "./components/section-head";
import SkillsAndAbilities from "./components/Skills-and-abilities";
import Status from "./components/Status";
import Typesheet from "./components/Type-sheet";
import WorkHistory from "./components/work-history";


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