'use client'
import styles from './style.module.scss';
import SectionHead from "../../components/section-head";
import { useState } from "react";
import ContentSheet from "./content-sheet";

function WorkHistory(){
	const sections = [
		{
			id: 'dxw',
			title: 'dxw',
			content: () => {
				return (
					<ContentSheet
						name="dxw"
						duration="2010-2012"
						clients={["Client 1", "Client 2", "Client 3"]}
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
		}
	];

	const [activeSection, setActiveSection] = useState(sections[0]);
    return (
        <section className={styles.work_history}>
			<div className="container pb--deep">
				<SectionHead titleString="My story so far" separator/>
				<nav className={styles.nav}>
					<button className={styles.nav__item}>dxw</button>
					<button className={styles.nav__item}>Hamilton-Brown</button>
					<button className={styles.nav__item}>Freelance</button>
					<button className={styles.nav__item}>Stepladder</button>
				</nav>
				<div className={styles.work_history__content}>
					{activeSection.content()}
				</div>
			</div>
        </section>
    )
}

export default WorkHistory;