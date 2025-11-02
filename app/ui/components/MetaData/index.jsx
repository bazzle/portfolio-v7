import PostDate from "@/app/ui/components/PostDate";
import TagList from "@/app/ui/components/TagList";
import styles from './MetaData.module.scss';

function MetaData({tags, date}){
	return(
		<div className={styles.metadata}>
			<PostDate rawDate={date} />
			{tags && <span className={styles.divider}></span>}
			{tags && <TagList tags={tags} />}
		</div>
	)
}

export default MetaData
