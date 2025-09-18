import styles from "./ListItem.module.scss";

function ListItem({content, blocky}){
	const className = [
		styles.listItem,
		blocky ? styles["listItem____blocky"] : undefined
	].filter(Boolean).join(' ');

	return(
		<li className={className}>
			<span dangerouslySetInnerHTML={{ __html: content }} />
		</li>
	)
}

export default ListItem;
