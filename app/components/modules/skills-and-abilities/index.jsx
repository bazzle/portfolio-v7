import styles from './style.module.scss';
import SectionHead from "../../components/section-head";

function SkillsAndAbilities(){

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

    const abilitiesItems = [
        { id: 1, name: 'Accessibility'},
        { id: 2, name: 'Responsive web'},
        { id: 3, name: 'Semantics'},
        { id: 4, name: 'User centred design'},
        { id: 5, name: 'Typography'}
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
        <section className={styles.skills_abilities}>
            <div className="container">
                <SectionHead titleString="Skills and Abilities" separator/>
                <div className={styles.inner}>
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
                    <ul className={styles.abilities_list}>
                        {abilitiesItems.map(item => (
                            <li className={styles.abilities_list__item} key={item.id}>
                                <span className={styles.abilities_list__item__name}>
                                    {item.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default SkillsAndAbilities;