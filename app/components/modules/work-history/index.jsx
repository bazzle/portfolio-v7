'use client'
import styles from './style.module.scss';
import SectionHead from "../../components/section-head";
import { useState } from "react";
import ContentSheet from "./content-sheet";

function WorkHistory(){
	const sections = [
		{
			id: 'freelance',
			title: 'Freelance',
			content: () => {
				return (
					<ContentSheet
						name="Freelance"
						duration="~2 years – 2010-2012"
						clients={["Geckoboard", "Lumanity", "Momentum ITSMA", "Recipe London", "93 Digital", "Fat Beehive", "Shelter", "Helpful Digital" ]}
						intro="My freelance work intro here"
						bodyContent={`
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
							</p>
							<p>
								Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
							</p>
						`}
					/>
				)
			}
		},
		{
			id: 'dxw',
			title: 'dxw',
			content: () => {
				return (
					<ContentSheet
						name="dxw"
						duration="2010-2012"
						clients={["British Film Institute", "Ministry of Justice", "National Health Service", "Office for National Statistics", "University Alliance,", "National Audit Office"]}
						intro="dxw is a digital agency that works with the public and third sectors."
						bodyContent={`
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
							</p>
							<p>
								Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
							</p>
						`}
					/>
				)
			}
		},
		{
			id: 'hamilton-brown',
			title: 'Hamilton Brown',
			content: () => {
				return (
					<ContentSheet
						name="Hamilton Brown"
						duration="2010-2012"
						clients={["BDO Store", "Lionpoint"]}
						intro="Hamilton-Brown is a creative agency based in London"
						bodyContent={`
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
							</p>
							<p>
								Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
							</p>
						`}
					/>
				)
			}
		},
		{
			id: 'Stepladder',
			title: 'Stepladder',
			content: () => {
				return (
					<ContentSheet
						name="Stepladder"
						duration="2010-2012"
						clients={["Canary Wharf Group"]}
						intro="Hamilton-Brown is a creative agency based in London"
						bodyContent={`
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
							</p>
							<p>
								Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
							</p>
						`}
					/>
				)
			}
		}
	];

	const [activeSection, setActiveSection] = useState(sections[0]);

	function handleClick(evt, section){
		setActiveSection(section);
		evt.preventDefault();
	}

	function navItem(arrayIndex){
		const section = sections[arrayIndex];
		const isActive = activeSection.id === section.id;
		const conditionalClass = isActive ? styles.is_active : '';
		return (
			<button 
				onClick={(evt) => handleClick(evt, section)} 
				className={`${styles.nav__item} ${conditionalClass}`}>
				{section.title}
			</button>
		)
	}

    return (
        <section className={styles.work_history}>
			<div className="container pt--deep">
				<div className="inner-2col">
					<div className="col-1">
						<SectionHead titleString="My story so far" separator/>
					</div>
					<div className="col-2">
						<p>
							Some blurb here Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
						</p>
					</div>
				</div>
			</div>
			<div className="container pb--deep">
				<nav className={styles.nav}>
					{navItem(0)}
					{navItem(1)}
					{navItem(2)}
					{navItem(3)}
				</nav>
				{activeSection.content()}
			</div>
        </section>
    )
}

export default WorkHistory;