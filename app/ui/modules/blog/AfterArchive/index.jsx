import Link from "next/link";
import styles from './AfterArchive.module.scss';

function AfterArchive(){
	return(
		<div className={styles.afterArchive}>
			<div className="content-container">
				<Link href="/thoughts">Back to index</Link>
			</div>
		</div>
	)
}

export default AfterArchive;
