// import Image from "next/image";
import Hero from "./components/modules/hero";
import SkillsAndAbilities from "./components/modules/skills-and-abilities";
import WorkHistory from "./components/modules/work-history";
import Welcome from "./components/modules/welcome";
import Clients from "./components/modules/clients";

function Home(){
	return(
		<main>
			<Hero/>
			<Clients/>
			<Welcome/>
			<SkillsAndAbilities/>
			<WorkHistory/>
		</main>
	)
}

export default Home;