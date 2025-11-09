import { format } from "date-fns"
import styles from './MetaData.module.scss';

function PostDate({rawDate}){
	let dateOutput
	if (rawDate != null){
		const formattedDate = format(new Date(rawDate), 'MMMM dd, yyyy');
		dateOutput = <time className={styles['post-date']} dateTime={rawDate}>{formattedDate}</time>;
	} else {
		dateOutput = "Unknown date"
	}
	return dateOutput;
}

export default PostDate
