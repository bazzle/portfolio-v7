import styles from './style.module.scss';
import Clients from "@/app/components/modules/hero/clients";
import BgShapes from '@/app/components/components/bg-shapes';
import SideFurniture from './side-furniture';
import ActionLink from '@/app/components/components/action-link';
import Spacer from '@/app/components/components/spacer';

function Hero(){

    return(
        <div className={styles.hero}>
            <div className={styles.main_section} >
				<div className="container container--vertical-fill">
					<div className={styles.main_section__inner}>
						<p className={styles.message}>
							<span className={styles.message__sub}>
								My philosophy is
							</span>
							<span className={styles.message__main}>
								Web for <span>Everyone</span>
							</span>
							<span className={styles.message__sub}>
								... But still <span className="highlight">POP &#128165;</span>
							</span>
						</p>
						<SideFurniture/>
					</div>
				</div>
				<BgShapes variant="1" />
            </div>
			<div className={styles.foot_section}>
				<div className={styles.foot_section__inner}>
					<div className="container">
						<div className={styles.intro}>
							<p className={styles.intro_main}>Hello! I’m a UK based web designer, developer and accessibility consultant.<br/>
							<a href="#welcome">Read more about me</a></p>
							<div className={styles.contacts}>
								<ActionLink linkString="./public/assets/files/cv.pdf" textString="CV" printString="barry@br-web.me" />
								<ActionLink linkString="https://www.linkedin.com/in/br-web/" textString="LinkedIn" printString="linkedin.com/in/br-web/" />
								<ActionLink linkString="https://github.com/bazzle/" textString="Github" printString="github.com/bazzle/" />
								<ActionLink linkString="mailto:barry@br-web.me" textString="Drop me an email" printString="barry@br-web.me" />
							</div>
						</div>
						<Spacer mobile />
						<Clients/>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Hero;