import Section from '@/app/ui/components/Section';
import styles from "./TextStandout.module.scss";

function TextStandout({content, line, deepMb, deepMbLine, textPrefix, children, id, addToNav}){

	const optionalProps = {
		...(line ? { line } : {}),
		...(deepMb ? { deepMb } : {}),
		...(deepMbLine ? { deepMbLine } : {}),
		...(id ? { id } : {}),
		...(addToNav ? { addToNav } : {})
	}

	const textPrefixElem = (
		<h2 className={styles.textStandout__prefix}>{textPrefix}</h2>
	)

	const childrenContainer = (
		<div className={styles.textStandout__children}>
			{children}
		</div>
	)

	return(
		<Section
			moduleClassname={styles.textStandout} 
			layout="fullWidth" 
			{...optionalProps}
			>
			<div className={styles.textStandout__main}>
				{textPrefix && textPrefixElem}
				<p className={styles.textStandout__text}>
					{content}
				</p>
				{children && childrenContainer}
			</div>
		</Section>
	)
}

export default TextStandout;
