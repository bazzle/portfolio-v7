// import Image from "next/image";

import Hero from "./components/Hero";
import SectionHead from "./components/section-head";
import SkillsAndAbilities from "./components/Skills-and-abilities";
import Status from "./components/Status";
import WorkHistory from "./components/work-history";


function Home(){
	return(
		<main>
			<Hero/>
			<SkillsAndAbilities/>
			<Status/>
			<WorkHistory/>
		</main>
	)
}

export default Home;