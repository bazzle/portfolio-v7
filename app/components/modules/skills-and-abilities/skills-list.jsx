import styles from "./style.module.scss";

function SkillsList(){

	const skillsItems = [
        { id: 1, name: 'HTML/DOM',  rating: 5 },
        { id: 2, name: 'CSS/SASS',  rating: 5 },
        { id: 3, name: 'Vanilla JS',  rating: 4 },
        { id: 4, name: 'React',  rating: 3 },
        { id: 5, name: 'Git',  rating: 4 },
        { id: 6, name: 'WordPress',  rating: 4 },
        { id: 7, name: 'PHP',  rating: 3 },
        { id: 8, name: 'Three.js',  rating: 1 },
        { id: 9, name: 'Figma',  rating: 5 }
	];

    const ratingsAdd = (number) => {
        const ratingArray = new Array(number).fill(null);
        return ratingArray.map(
            (item, index) => (
                <span key={index} className={styles.plus}>+</span>
            )
        );
    }

	return(

		<div className={styles.list_section}>

			<div className={styles.list_section__inner}>
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
			</div>

		</div>

	)
}

export default SkillsList;