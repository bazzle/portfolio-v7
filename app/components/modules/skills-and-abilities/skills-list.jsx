import styles from "./style.module.scss";
import { SkillsContent } from "@/app/content/body-content";

function SkillsList(){

	const skillsItems = SkillsContent.skillsItems
	skillsItems.sort((a, b) => b.rating - a.rating);

    const ratingsAdd = (number) => {
        const ratingArray = new Array(number).fill(null);
        return ratingArray.map(
            (item, index) => (
                <span key={index} className={styles.plus}>+</span>
            )
        );
    }

	return(

		<ul className={styles.skills_list}>
			{skillsItems.map(item => (
				<li className={styles.skills_list__item} key={item.id}>
					<span className={styles.skills_list__item__name}>
						{item.name}
					</span>
					<span className={styles.skills_list__item__rating}>
						{ratingsAdd(item.rating)}
					</span>
				</li>
			))}
		</ul>

	)
}

export default SkillsList;