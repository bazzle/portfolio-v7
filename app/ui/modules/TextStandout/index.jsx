import Section from '@/app/ui/components/Section';
import styles from "./TextStandout.module.scss";

function TextStandout({content, line, deepMb, deepMbLine, textPrefix, moreContent}){

	const optionalProps = {
		...(line ? { line } : {}),
		...(deepMb ? { deepMb } : {}),
		...(deepMbLine ? { deepMbLine } : {}),
	}

	const textPrefixElem = (
		<p className={styles.textStandout__prefix}>{textPrefix}</p>
	)

	return(
		<Section
			moduleClassname={styles.textStandout}
			layout="fullWidth"
			{...optionalProps}
			>
			<div className={styles.textStandout__main}>
				{textPrefix && textPrefixElem}
				<p className={styles.textStandout__main__text}>
					{content}
				</p>
			</div>
		</Section>
	)
}

export default TextStandout;
