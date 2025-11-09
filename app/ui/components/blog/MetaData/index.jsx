'use client'

import PostDate from "@/app/ui/components/blog/PostDate";
import TagList from "@/app/ui/components/blog/TagList";
import styles from './MetaData.module.scss';

function MetaData({tags, date}){
	
	const tagsList = (
		<>
			<span className={styles.divider}></span>
			<TagList tags={tags} />
		</>
	)
	return(
		<div className={styles.metadata}>
			<PostDate rawDate={date} />
			{tags && tagsList}
		</div>
	)
}

export default MetaData
