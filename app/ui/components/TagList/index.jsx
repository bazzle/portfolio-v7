import Link from "next/link";
import styles from './TagList.module.scss';

function TagList({tags}){
        const tagItems = tags.map((tag, index)=> (
			<li key={index}>
					<Link href={`/${tag}`}>{tag}</Link>
			</li>
        ));
	return (
		<ul className={styles.tagList}>
			{tagItems}
		</ul>
	)
}

export default TagList
