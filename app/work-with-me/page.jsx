import Hero2 from "@/app/ui/modules/Hero2";
import Welcome from "@/app/ui/modules/Welcome";
import SignOff from "@/app/ui/modules/SignOff";

export const metadata = {
  title: "Barry Richards Design tinkerer - Work with me",
};

function WorkWithMe() {
  return (
    <main>
		<Hero2/>
		<Welcome/>
		<SignOff/>
	</main>
  );
}

export default WorkWithMe;
