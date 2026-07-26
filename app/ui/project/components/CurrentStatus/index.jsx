import styles from './CurrentStatus.module.scss'
import ListItem from '@/app/ui/project/components/ListItem'
import { CurrentStatusValue } from '@/app/content/home'

export default function CurrentStatus() {
	return (
		<div className={styles.currentStatus}>
			<p className={styles.currentStatus__heading}>Currently:</p>
			<ul className={styles.currentStatus__list}>
				{CurrentStatusValue.map((item, index) => (
					<ListItem key={index} content={item} />
				))}
			</ul>
		</div>
	)
}
