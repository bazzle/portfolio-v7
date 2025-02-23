'use client'
import styles from './style.module.scss';
import SectionHead from "@/app/components/components/section-head";
import ContentSheet from "./content-sheet";
import { useState } from "react";
import Section from '@/app/components/components/section';
import { WorkHistoryContent } from '@/app/content/body-content';

function WorkHistory(){

	const sectionTitle = WorkHistoryContent.title
	const sectionsArray = WorkHistoryContent.workHistoryItems

	const [activeSection, setActiveSection] = useState(sectionsArray[0]);

	function handleClick(evt, section){
		setActiveSection(section);
		evt.preventDefault();
	}

	function navItem(item, index){
		const isActive = activeSection.id === item.id
		const conditionalClass = isActive && styles.is_active
		return (
			<button
				key={index}
				role="tab"
				onClick={(evt) => handleClick(evt, item)}
				className={`${styles.nav_item} ${conditionalClass}`}
				aria-controls={`panel-${item.id}`}
				aria-selected={isActive ? 'true' : 'false'}
			>
				<span className={styles.nav_item__inner}>
					<span className={styles.nav_item__title}>{item.name}</span>
					<span className={styles.nav_item__dates}>{item.startDate} – {item.endDate}</span>
				</span>
			</button>
		)
	}
    return (
        <Section id="work-history" noLineMobile>
			<div className={styles.work_history}>
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<div className={styles.work_history__sectionHead}>
								<SectionHead titleString={sectionTitle} separator/>
							</div>
						</div>
						<div className="col-2">
							<div className={styles.work_history__inner}>
								<nav role="tablist" className={styles.nav}>
									{ sectionsArray.map((item, index) => navItem(item, index)) }
								</nav>
								{sectionsArray.map((item, index) => (
									<ContentSheet
										key={index}
										contentSheetObj = {item}
										isHidden = {item === activeSection ? false : true}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
        </Section>
    )
}

export default WorkHistory;