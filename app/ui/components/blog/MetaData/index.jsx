'use client'

import PostDate from "@/app/ui/components/blog/PostDate";
import TagList from "@/app/ui/components/blog/TagList";
import styles from './MetaData.module.scss';
import { useContext } from "react";
import { HomepageContext } from "@/app/context/HomepageCheck";

function MetaData({tags, date}){
	const {isHome} = useContext(HomepageContext);
	
	const tagsList = (
		<>
			<span className={styles.divider}></span>
			<TagList tags={tags} />
		</>
	)
	return(
		<div className={styles.metadata}>
			<PostDate rawDate={date} />
			{(tags && isHome) && tagsList}
		</div>
	)
}

export default MetaData
