import styles from './style.module.scss';
import ActionLink from "../../components/action-link";
import VerticalDots from "../../components/vertical-dots";
import Contacts from "../contacts";
import Image from "next/image";

function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.main_section}>
				<div className="container">
					<div className={styles.main_section__inner}>
						<p className={styles.message}>
							<span className={styles.message__sub}>
								My philosophy is
							</span>
							<span className={styles.message__main}>
								Web for <span className={styles.highlight_alt}>everyone</span>
							</span>
							<span className={styles.message__sub}>
								... But still <span className={styles.highlight}>look cool</span>.
							</span>
						</p>
						<div className={styles.side_furniture}>
							<div className={styles.side_furniture__dots}>
								<VerticalDots numDots = {4} />
							</div>
							<div className={styles.side_furniture__tick}>
								<svg viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="56.895" y="25.8069" width="18.2061" height="18.2061" transform="rotate(-135 56.895 25.8069)" fill="#FFAAAA"/><rect x="13.1887" y="40.376" width="18.2061" height="18.2061" transform="rotate(-135 13.1887 40.376)" fill="#FFAAAA"/><rect x="27.7576" y="54.9448" width="18.2061" height="18.2061" transform="rotate(-135 27.7576 54.9448)" fill="#FFAAAA"/><rect x="27.7576" y="54.9448" width="18.2061" height="18.2061" transform="rotate(-135 27.7576 54.9448)" fill="#FFAAAA"/><rect x="42.3264" y="40.3757" width="18.2061" height="18.2061" transform="rotate(-135 42.3264 40.3757)" fill="#FFAAAA"/></svg>
							</div>
							<div className={styles.side_furniture__dots}>
								<VerticalDots numDots = {2} />
							</div>
							<div className={styles.side_furniture__profile}>
								<svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg">
									<mask id="profileMask">
										<path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" fill="white" />
									</mask>
									<image
									href="../assets/images/profile.jpg"
									width="25"
									height="25"
									mask="url(#profileMask)"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
            </div>
			<div className={styles.foot_section}>
				<Contacts />
			</div>
        </section>
    )
}

export default Hero;