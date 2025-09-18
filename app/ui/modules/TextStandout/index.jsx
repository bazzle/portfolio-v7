import Section from '@/app/ui/components/Section';
import styles from "./TextStandout.module.scss";

function TextStandout({content, line, deepMb, deepMbLine}){

	const optionalProps = {
		...(line ? { line: true } : {}),
		...(deepMb ? { deepMb: true } : {}),
		...(deepMbLine ? { deepMbLine: true } : {}),
	}

	return(
		<Section
			moduleClassname={styles.textStandout}
			layout="fullWidth"
			{...optionalProps}
			>
			<blockquote className={styles["textStandout__blockquote"]}>
				<p className={styles["textStandout__blockquote__text"]}>
					{content}
				</p>
			</blockquote>
		</Section>
	)
}

export default TextStandout;
