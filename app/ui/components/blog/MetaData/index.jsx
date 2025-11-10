'use client'
import Link from "next/link";
import styles from './MetaData.module.scss';
import { format } from "date-fns"


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

	function postDate(rawDate){
		let dateOutput
		if (rawDate != null){
			const formattedDate = format(new Date(rawDate), 'MMMM dd, yyyy');
			dateOutput = <time className={styles.postDate} dateTime={rawDate}>{formattedDate}</time>;
		} else {
			dateOutput = "Unknown date"
		}
		return dateOutput;
	}

	return(
		<div className={styles.metadata}>
			{postDate(date)} {tags && tagsList()}
		</div>
	)
}

export default MetaData
