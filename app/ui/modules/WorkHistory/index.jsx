'use client'
import { useState } from "react";
import SectionHead from "@/app/ui/components/SectionHead";
import Section from '@/app/ui/components/Section';
import ContentSheet from "./ContentSheet";
import { WorkHistoryContent } from '@/app/content/BodyContent';

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
		const conditionalClass = isActive ? "is_active" : "not_active"
		return (
			<button
				key={index}
				role="tab"
				onClick={(evt) => handleClick(evt, item)}
				className={`workHistoryItem ${conditionalClass}`}
				aria-controls={`panel-${item.id}`}
				aria-selected={isActive ? 'true' : 'false'}
			>
				<span className="workHistoryItem__inner">
					<span className="workHistoryItem__title">{item.name}</span>
					<span className="workHistoryItem__dates">{item.startDate} – {item.endDate}</span>
				</span>
			</button>
		)
	}
    return (
        <Section id="work-history" noLineMobile>
			<div className="workHistory">
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<div className="workHistory__sectionHead">
								<SectionHead titleString={sectionTitle} separator/>
							</div>
						</div>
						<div className="col-2">
							<div className="workHistory__inner">
								<nav role="tablist" className="workHistory__nav">
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