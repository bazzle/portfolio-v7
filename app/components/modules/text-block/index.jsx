import styles from "./style.module.scss";
import Section from '@/app/components/components/section';

function TextBlock(props){

	return(
		<Section>
			<div className={styles.text_block}>
				<div className="container">
					<blockquote className={styles.text_block__blockquote}>
						{props.text}
					</blockquote>
				</div>
				<div role="presentation" className={styles.shapes}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</Section>
	)

}

export default TextBlock;