import { CurrentStatusContent } from "@/app/content/BodyContent";

export default function CurrentStatus(){
	return(
		<p>
			<strong>{CurrentStatusContent.label}:</strong> {CurrentStatusContent.value()}
		</p>
	)
}