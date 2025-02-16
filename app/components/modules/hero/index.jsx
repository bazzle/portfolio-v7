import styles from './style.module.scss';
import Contacts from "@/app/components/modules/hero/contacts";
import Clients from "@/app/components/modules/hero/clients";
import BgShapes from '@/app/components/components/bg-shapes';
import SideFurniture from './side-furniture';
import Spacer from '@/app/components/components/spacer';

function Hero(){

    return(
        <div className={styles.hero}>
            <div className={styles.main_section} >
				<div className="container">
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
						<div className={styles.side_furniture_container}>
							<SideFurniture/>
						</div>
					</div>
				</div>
				<BgShapes variant="1" />
            </div>
			<div className={styles.foot_section}>
				<div className={styles.foot_section__inner}>
					<div className="container">
						<div className={styles.intro}>
							<p>Hello! I’m a UK based web designer, developer and accessibility consultant. <a href="#welcome">Read more about me</a></p>
						</div>
					</div>
					<Contacts/>
					<Clients/>
				</div>
			</div>
			<Spacer deep />
        </div>
    )
}

export default Hero;