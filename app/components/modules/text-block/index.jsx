import styles from "./style.module.scss";

function TextBlock(props){

	return(
		<section>
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
		</section>
	)

}

export default TextBlock;