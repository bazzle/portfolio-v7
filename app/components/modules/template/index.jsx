import styles from "./style.module.scss";

function Template(){
	return(
		<div className={styles.template}>
			<div className="container">
				<div className={styles.inner}>
					<p>Template module</p>
				</div>
			</div>
		</div>
	)
}

export default Template