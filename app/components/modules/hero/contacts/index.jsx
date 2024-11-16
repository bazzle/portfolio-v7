'use client'
import styles from './style.module.scss';
import ActionLink from '@/app/components/components/action-link';


function Contacts() {

	const PrintPage = () => {
		window.print();
	}
	return (
		<div className={styles.contacts}>
			<div className={styles.inner}>
				<ActionLink linkString="https://www.linkedin.com/in/br-web/" textString="LinkedIn" printString="linkedin.com/in/br-web/" />
				<ActionLink linkString="https://github.com/bazzle/" textString="Github" printString="github.com/bazzle/" />
				<ActionLink linkString="mailto:barry@br-web.me" textString="Drop me an email" printString="barry@br-web.me" />
				<ActionLink classes="hide-print" clickEvent={PrintPage} textString="Print this page" />
			</div>
		</div>
	)
}

export default Contacts;