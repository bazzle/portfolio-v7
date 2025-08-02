import Hero from "@/app/ui/modules/Hero";
import Welcome from "@/app/ui/modules/Welcome";
import SignOff from "@/app/ui/modules/SignOff";

export const metadata = {
  title: "Barry Richards Design tinkerer - Work with me",
};

function WorkWithMe() {
  return (
    <main>
		<Hero/>
		<Welcome/>
		<SignOff/>
	</main>
  );
}

export default WorkWithMe;
