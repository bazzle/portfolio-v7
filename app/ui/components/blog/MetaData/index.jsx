'use client'
import Link from "next/link";
import PostDate from "./PostDate";
import styles from './MetaData.module.scss';


function MetaData({tags = [], date}){

	function tagsList(){
		const tagItems = tags.map((tag, index)=> (
			<li key={index} className={styles.tagList__item}>
					<Link href={`/thoughts/tag/${tag}`}>{tag}</Link>
					<span className={styles.dash}>/</span>
			</li>
		));
		return (
			<>
				<span className={styles.divider}></span>
				<ul className={styles.tagList}>
					{tagItems}
				</ul>
			</>
		)
	}

	return(
		<div className={styles.metadata}>
			<PostDate rawDate={date} /> {tags && tagsList()}
		</div>
	)
}

export default MetaData
