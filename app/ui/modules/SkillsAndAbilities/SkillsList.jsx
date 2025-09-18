import { SkillsContent } from "@/app/content/BodyContent";
import styles from "./SkillsAndAbilities.module.scss";

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

		<ul className={styles.skillsList}>
			{skillsItems.map(item => (
				<li className={styles["skillsList__item"]} key={item.id}>
					<span className={styles["skillsList__item__name"]}>
						{item.name}
					</span>
					<span className={styles["skillsList__item__rating"]}>
						{ratingsAdd(item.rating)}
					</span>
				</li>
			))}
		</ul>

	)
}

export default SkillsList;
