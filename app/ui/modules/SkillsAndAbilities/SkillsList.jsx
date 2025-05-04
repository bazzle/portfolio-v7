
import { SkillsContent } from "@/app/content/BodyContent";

function SkillsList(){

	const skillsItems = SkillsContent.skillsItems
	skillsItems.sort((a, b) => b.rating - a.rating);

    const ratingsAdd = (number) => {
        const ratingArray = new Array(number).fill(null);
        return ratingArray.map(
            (item, index) => (
                <span key={index} className="plus">+</span>
            )
        );
    }

	return(

		<ul className="skillsList">
			{skillsItems.map(item => (
				<li className="skillsList__item" key={item.id}>
					<span className="skillsList__item__name">
						{item.name}
					</span>
					<span className="skillsList__item__rating">
						{ratingsAdd(item.rating)}
					</span>
				</li>
			))}
		</ul>

	)
}

export default SkillsList;