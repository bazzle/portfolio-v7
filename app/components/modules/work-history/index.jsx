'use client'
import styles from './style.module.scss';
import SectionHead from "../../components/section-head";
import { useState } from "react";
import ContentSheet from "./content-sheet";
import Spacer from '../../components/spacer';

const ongoingYear = (startYear) => {
	const currentYear = new Date().getFullYear();
	return currentYear - startYear
}

function WorkHistory(){
	let sections = [
		{
			id: 'dxw',
			title: 'dxw',
			content: () => {
				return (
					<ContentSheet
						name="dxw"
						id="dxw"
						startDate={2021}
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
			id: 'freelance',
			title: 'Freelance',
			content: () => {
				return (
					<ContentSheet
						name="Freelance"
						id="freelance"
						startDate={2018}
						endDate={2020}
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
			id: 'hamilton-brown',
			title: 'Hamilton Brown',
			content: () => {
				return (
					<ContentSheet
						name="Hamilton Brown"
						id="hamilton-brown"
						startDate={2015}
						endDate={2018}
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
			id: 'stepladder',
			title: 'Stepladder',
			content: () => {
				return (
					<ContentSheet
						name="Stepladder"
						id="stepladder"
						startDate={2015}
						endDate={2018}
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
		const conditionalClass = isActive && styles.is_active;
		return (
			<button role="tab"
				onClick={(evt) => handleClick(evt, section)}
				className={`${styles.nav_item} ${conditionalClass}`}
				aria-controls={`panel-${section.id}`}
				aria-selected={isActive ? 'true' : 'false'}
			>
				<span className={styles.nav_item__inner}>
					<span className={styles.nav_item__title}>{section.title}</span>
					<span className={styles.nav_item__dates}>2021-present</span>
				</span>
			</button>
		)
	}
    return (
        <section className={styles.work_history}>
			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<div className={styles.work_history__sectionHead}>
							<SectionHead titleString="My story so far" separator/>
						</div>
					</div>
					<div className="col-2">
						<nav role="tablist" className={styles.nav}>
							{navItem(0)}
							{navItem(1)}
							{navItem(2)}
							{navItem(3)}
						</nav>
						{activeSection.content()}
					</div>
				</div>
			</div>
		<Spacer/>
        </section>
    )
}

export default WorkHistory;