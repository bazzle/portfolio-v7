'use client'
import styles from './style.module.scss';
import ActionLink from '@/app/components/components/action-link';


function Contacts() {

	const PrintPage = () => {
		window.print();
	}
	return (
		<div className={styles.contacts}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.contacts_section}>
						<ActionLink linkString="https://www.linkedin.com/in/br-web/" textString="LinkedIn" printString="linkedin.com/in/br-web/" />
						<ActionLink linkString="https://github.com/bazzle/" textString="Github" printString="github.com/bazzle/" />
					</div>
					<div className={styles.contacts_section}>
						<ActionLink linkString="mailto:barry@br-web.me" textString="Drop me an email" printString="barry@br-web.me" />
						<ActionLink classes="hide-print" clickEvent={PrintPage} textString="Print this page" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts;