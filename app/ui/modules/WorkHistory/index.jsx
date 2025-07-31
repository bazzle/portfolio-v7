'use client'
import { useState, useEffect, useRef } from "react";
import Section2 from '@/app/ui/components/Section';
import ContentSheet from "./ContentSheet";
import { WorkHistoryContent } from '@/app/content/BodyContent';

function WorkHistory(){
	const mediaQuery = '(min-width: 1340px)';
	const title = WorkHistoryContent.title
	const sectionsArray = WorkHistoryContent.workHistoryItems;

	const [activeSection, setActiveSection] = useState(sectionsArray[0]);

	const tablistRef = useRef(null);
	const currentItemRef = useRef(null);
	const extendingLineRef = useRef(null);

	function getTablistPercentage(){
		const elem = tablistRef.current;
		if(elem){
			const width = Math.round(elem.getBoundingClientRect().width);
			const start = Math.round(elem.getBoundingClientRect().x);
			const activeItemPosition = Math.round(currentItemRef.current.getBoundingClientRect().x);
			const percentage = Math.min(100, Math.max(0, ((activeItemPosition - start) / width) * 100));
			return percentage;
		}
	}

	useEffect(() => {
		const mql = window.matchMedia(mediaQuery);
		const handleChange = () => {
			if (mql.matches){
				extendLine(getTablistPercentage());
			}
		};
		handleChange();
		mql.addEventListener('change',handleChange);
		
		return () => {
			mql.removeEventListener('change', handleChange);
		}
	},[] );

	function extendLine(inputWidth){
		const elem = extendingLineRef.current;
		if(elem){
			elem.style.width = `${inputWidth}%`
		}
	}

	function handleClick(evt, section) {
		setActiveSection(section);
		evt.preventDefault();
		const mql = window.matchMedia(mediaQuery);
		if (mql.matches) {
			setTimeout(() => {
				extendLine(getTablistPercentage());
			}, 1);
		}
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
				{isActive && <span className="indicator" ref={currentItemRef}></span> }
			</button>
		)
	}
    return (
		<Section2 moduleClassname="workHistory" heading={title} id="work-history" layout="2col">
			<div className="workHistory__inner">
				<nav ref={tablistRef} role="tablist" className="workHistory__nav">
					{ sectionsArray.map((item, index) => navItem(item, index)) }
					<div role="presentation" className="extending_line" ref={extendingLineRef}></div>
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