import React from "react";

function HorizontalList({listItems, heading}){
	if (listItems.length === 0) return null;

	const wrapper = (input)=>{
		if(React.isValidElement(input)){
			return (<span>{input}</span>)
		} else {
			return (<span dangerouslySetInnerHTML={{ __html: input }} />)
		}
	}

	return (
		<div className="horizontalList">
			
			{heading && <h3 className="horizontalList__heading">{heading}</h3>}
			<ul>
				{listItems.map((item, index)=>(
					<li key={index}>
						{wrapper(item)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default HorizontalList;