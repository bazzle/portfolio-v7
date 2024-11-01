import styles from './style.module.scss';

function BgShapes(props){
	const variantClass = styles[`shapes_${props.variant}`];
	console.log(styles);
	return(
		<div role="presentation" className={`${styles.shapes} ${variantClass}`}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default BgShapes;