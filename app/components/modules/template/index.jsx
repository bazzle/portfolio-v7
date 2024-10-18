import styles from "./style.module.scss";

function Template(){
	return(
		<section className={styles.template}>
			<div className="container">
				<div className={styles.inner}>
					<p>Template module</p>
				</div>
			</div>
		</section>
	)
}

export default Template