import styles from './style.module.scss';
import Contacts from "@/app/components/modules/hero/contacts";
import Clients from "@/app/components/modules/hero/clients";
import BgShapes from '@/app/components/components/bg-shapes';
import SideFurniture from './side-furniture';
import Spacer from '@/app/components/components/spacer';

function Hero(){
    return(
        <div className={styles.hero}>
            <div className={styles.main_section}>
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
								... But still <span className="highlight">look cool</span>.
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
				<div className="container">
					<div className={styles.foot_section__inner}>
						<div className={styles.intro}>
							<p>Hello! I’m a UK based web designer and developer. Open to opportunities</p>
							<a href="#welcome">Read more about me</a>
						</div>
						<Contacts/>
						<Clients/>
					</div>
				</div>
			</div>
			<Spacer />
        </div>
    )
}

export default Hero;