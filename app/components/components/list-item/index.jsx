import styles from "./style.module.scss";

function ListItem(props){
	return(
		<li className={`${styles.list_item} ${props.blocky && styles.blocky} `}>
			<span dangerouslySetInnerHTML={{ __html: props.content }} />
		</li>
	)
}

export default ListItem;