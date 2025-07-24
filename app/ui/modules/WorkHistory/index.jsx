'use client'
import { useState } from "react";
import Section2 from '@/app/ui/components/Section2';
import ContentSheet from "./ContentSheet";
import { WorkHistoryContent } from '@/app/content/BodyContent';

function WorkHistory(){

	const title = WorkHistoryContent.title
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
		<Section2 moduleClassname="workHistory" heading={title} id="work-history" layout="2col">
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
        </Section2>
    )
}

export default WorkHistory;