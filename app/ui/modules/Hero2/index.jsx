import BgShapes from '@/app/ui/components/BgShapes';
import ActionLink from '@/app/ui/components/ActionLink';
import Spacer from '@/app/ui/components/Spacer';
import Profile from "@/app/ui/components/Profile";
import styles from "../Hero/Hero.module.scss";

function Hero2(){

    return(
        <div className={styles.hero}>
            <div className={styles["hero__mainSection"]}>
				<div className="container container--vertical-fill">
					<div className={styles["hero__mainSection__inner"]}>
						<p className={styles["hero__mainSection__message"]}>
							<span className={styles["hero__mainSection__message__main"]}>
								Lets <span>work together</span>
							</span>
						</p>
					</div>
				</div>
				<div className={styles["hero__profile"]}>
					<Profile/>
				</div>
				<BgShapes variant="1" />
            </div>
			<div className={styles["hero__footSection"]}>
				<div className={styles["hero__footSection__inner"]}>
					<div className="container">
						<div className={styles["hero__footSection__intro"]}>
							<div className={styles["hero__footSection__intro__main"]}>
								<p>
									<strong>Hello!</strong> I’m a UK based web designer, developer and accessibility consultant.
								</p>
							</div>
							<div className={styles["hero__footSection__contacts"]}>
								<ActionLink linkString="#get-in-touch" textString="Get in touch" />
								<ActionLink linkString="/" textString="Read more about me" />
							</div>
						</div>
						<Spacer mobile />
					</div>
				</div>
			</div>
        </div>
    )
}

export default Hero2;
