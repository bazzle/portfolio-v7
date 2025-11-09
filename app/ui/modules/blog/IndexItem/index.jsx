import MetaData from "@/app/ui/components/blog/MetaData";
import Link from "next/link";
import styles from './IndexItem.module.scss';

function IndexItem(props){
	const { post } = props;
	const date = post.date;
	const tags = post.tags;
	return (
		<div className={styles.postIndexItem}>
			<div className="content-container">
				<h2 className={styles.postIndexItem__title}>
					<Link href={`/thoughts/${post.slug}`}>{post.title}</Link>
				</h2>
				<div className={styles.postIndexItem__metadata}>
					<MetaData tags={tags} date={date} />
				</div>
				<div className={styles.postIndexItem__excerpt}>
					<p>{post.excerpt}</p>
				</div>
			</div>
		</div>
	)
}

export default IndexItem
