import Clients from "@/app/ui/modules/Hero/Clients";
import BgShapes from '@/app/ui/components/BgShapes';
import ActionLink from '@/app/ui/components/ActionLink';
import Spacer from '@/app/ui/components/Spacer';
import Profile from "@/app/ui/components/Profile";

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
									<strong>Hello!</strong> I’m a UK based web designer, developer and accessibility consultant.
								</p>
							</div>
							<div className="hero__footSection__contacts">
								<ActionLink linkString="./files/cv.pdf" textString="CV" printString="barry@br-web.me" />
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