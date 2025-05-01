

function ListItem({content, blocky}){
	return(
		<li className={`${styles.list_item} ${blocky ? styles.blocky : ''}`}>
			<span dangerouslySetInnerHTML={{ __html: content }} />
		</li>
	)
}

export default ListItem;