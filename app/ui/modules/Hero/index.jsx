import Clients from "@/app/ui/modules/Hero/Clients";
import ActionLink from "@/app/ui/components/ActionLink";
import BgShapes from '@/app/ui/components/BgShapes';
import Spacer from '@/app/ui/components/Spacer';
import Profile from "@/app/ui/components/Profile";
import Link from "next/link";

function Hero(){

    return(
        <div className="hero">
            <div className="hero__mainSection">
				<div className="container container--vertical-fill">
					<div className="hero__mainSection__inner">
						<p className="message">
							<span className="hero__mainSection__message__sub">
								My philosophy is
							</span>
							<span className="hero__mainSection__message__main">
								Web for <span>Everyone</span>
							</span>
							<span className="hero__mainSection__message__sub">
								... But still <span className="highlight">POP &#128165;</span>
							</span>
						</p>
					</div>
				</div>
				<div className="hero__profile">
					<Profile/>
				</div>
				<BgShapes variant="1" />
            </div>
			<div className="hero__footSection">
				<div className="hero__footSection__inner">
					<div className="container">
						<div className="hero__footSection__intro">
							<div className="hero__footSection__intro__main">
								<p>
									<strong>Hello!</strong> I’m a UK based web designer, developer and accessibility consultant.<br/>
									<Link href="#who-i-am-and-what-i-do">Read on</Link> to learn more about me, or <Link href="#get-in-touch">Get in touch</Link>!
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

export default Hero;