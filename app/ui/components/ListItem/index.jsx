

function ListItem({content, blocky}){
	return(
		<li className={`listItem ${blocky ? "listItem____blocky" : ''}`}>
			<span dangerouslySetInnerHTML={{ __html: content }} />
		</li>
	)
}

export default ListItem;