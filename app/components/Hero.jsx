import VerticalDots from "./vertical-dots";


function Hero(){
    return(
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <p className="hero__message">
						<span className="hero__message__sub">
                            My philosophy is
                        </span>
                        <span className="hero__message__main">
							Web for <span className="highlight--alt">everyone.</span>
                        </span>
                        <span className="hero__message__sub">
                            ... But still <span className="highlight">look cool</span>.
                        </span>
                    </p>
                    <VerticalDots/>
                </div>
            </div>
			<div className="container">
				<div className="hero__links">
                    <a href="mailto:barry@br-web.me">barry@br-web.me</a> &mdash;
                    <a href="https://www.linkedin.com/in/br-web/">LinkedIn</a>
				</div>
			</div>
        </section>
    )
}

export default Hero;