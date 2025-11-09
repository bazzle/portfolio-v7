import Clients from "@/app/ui/modules/Hero/HeroMain/Clients";
import BgShapes from '@/app/ui/components/BgShapes';
import Spacer from '@/app/ui/components/Spacer';
import Profile from "@/app/ui/components/Profile";
import Link from "next/link";
import styles from "../Hero.module.scss";

function HeroMain(){

    return(
        <div className={styles.hero}>
            <div className={styles["hero__mainSection"]}>
				<div className="container container--vertical-fill">
					<div className={styles["hero__mainSection__inner"]}>
						<p className={styles["hero__mainSection__message"]}>
							<span className={styles["hero__mainSection__message__sub"]}>
								My philosophy is
							</span>
							<span className={styles["hero__mainSection__message__main"]}>
								Web for <span>Everyone</span>
							</span>
							<span className={styles["hero__mainSection__message__sub"]}>
								... But still <span className="highlight">POP &#128165;</span>
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
									<strong>Hello!</strong> I&apos;m a UK based web designer, developer and accessibility consultant.<br/>
									<Link href="#who-i-am-and-what-i-do">Read on</Link> to learn more about me, <a href="./files/cv.pdf" target="_blank" rel="noopener noreferrer">download my CV</a> or <Link href="#get-in-touch">Get in touch</Link>!
								</p>
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

export default HeroMain;
