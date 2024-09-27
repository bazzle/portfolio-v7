import styles from './style.module.scss';
import ActionLink from '../../components/action-link';

function Contacts() {
	return (
		<div className={styles.contacts}>
			<div className={styles.inner}>
				<ActionLink linkString="mailto:barry@br-web.me" textString="Drop me an email" />
				<ActionLink linkString="https://www.linkedin.com/in/br-web/" textString="LinkedIn" />
				<ActionLink linkString="https://github.com/bazzle/" textString="Github" />
			</div>
		</div>
	)
}

export default Contacts;