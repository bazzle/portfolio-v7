import SectionHead from "../components/section-head.jsx";

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
        { id: 1, name: 'Accessibility',  rating: 5 },
        { id: 2, name: 'Responsive web',  rating: 5 },
        { id: 3, name: 'Semantics',  rating: 5},
        { id: 4, name: 'User centred design',  rating: 3 },
        { id: 5, name: 'Typography',  rating: 5 }
    ];



    const ratingsAdd = (number) => {
        const ratingArray = new Array(number).fill(null);
        return ratingArray.map(
            (item, index) => (
                <span key={index} className="plus">+</span>
            )
        );
    }

    return(
        <section className="skills-abilities">
            <div className="container">
                <SectionHead titleString="Skills and Abilities" separator/>
                <div className="skills-abilities__inner">
                    <ul className="skills-list">
                        {skillsItems.map(item => (
                            <li className="skill text-mono" key={item.id}>
                                <span className="skill__name">
                                    {item.name}
                                </span>
                                <span className="skill__rating">
                                    {ratingsAdd(item.rating)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <ul className="abilities-list">
                        {abilitiesItems.map(item => (
                            <li className="skill text-mono" key={item.id}>
                                <span className="skill__name">
                                    {item.name}
                                </span>
                                <span className="skill__rating">
                                    {ratingsAdd(item.rating)}
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