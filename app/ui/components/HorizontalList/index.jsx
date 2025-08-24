function HorizontalList({listItems}){
	 if (!listItems.length) return null;
	
	return (
		<span className="horizontalList">
			<ul>
				{listItems.map((item, index)=>(
					<li key={index}>
						<span dangerouslySetInnerHTML={{ __html: item }} />
					</li>
				))}
			</ul>
		</span>
	)
}

export default HorizontalList;