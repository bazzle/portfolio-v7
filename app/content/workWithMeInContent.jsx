import ListItem from "@/app/ui/components/ListItem"
import { BtcAcceptedHere } from "@/app/ui/components/Stickers";
import NostrCopy from "@/app/ui/components/NostrCopy";
import HorizontalList from "@/app/ui/components/HorizontalList";
import Link from "next/link";

// work with me page

export const ContentSection1 = {
	title: "What can I do for you?",
	bodyContent: () => {
		return(
			<>
				<p>I have around 15 years experience working on the web. I&apos;m a generalist who nerds out on everything from web typography to accessibility, to the subtle art of making things <strong>POP</strong>.</p>

				<p>What does this mean in practical terms? What can I <em>really</em> do for you? The no-fluff answer as ChatGPT would say. <strong>I can:</strong></p>

				<ul>
				<ListItem content={'Improve the <strong>look and feel</strong> of your website'} />
				<ListItem content={'Audit your website or web app for optimal <strong>accessibility</strong> to the latest WCAG guidelines'} />
				<ListItem content={'<strong>Make the necessary fixes</strong> for compliance'} />
				<ListItem content={'Bump up your google Lighthouse score'} />
				<ListItem content={'Design and build <strong>new features</strong>'} />
				<ListItem content={'Optimise your pages for <strong>search engines</strong>'} />
				</ul>

				<p>
					<span className="text-intro">
						There&apos;s that annoying broken piece of UI on your website or web app and the developer you used has ghosted you.
					</span>
				</p>

				<p>I can step in at any time during the website or app development cycle. Wireframe, mockup, iterate in Figma, build new features, address issues.</p>

				<p>I&apos;m also close to content designers and SEO specialists who I&apos;ve worked with before. We can team up to ensure your website content is the best it can be.</p>
			</>
		)
	}
}

export const TextStandout1 = "I'm a generalist who nerds out on everything from web typography to accessibility, to the subtle art of making things POP."
export const TextStandout2 = "Thankyou, have a great day!"

export const ContentSection2 = {
	title: "Why Bitcoin?",
	bodyContent: () => {
		return(
			<>
				<p>
					I do accept Bitcoin for my services. In fact I prefer it as form of payment, especially for cross-border payments. Why?
				</p>
				<ul>
					<ListItem content={'<strong>24 hour 7 days a week</strong> settlement within 30 mins. No waiting for bank transfers'}/>
					<ListItem content={'<strong>Verifiable</strong> on the blockchain.'}/>
					<ListItem content={'Backed by <strong>proof-of-work</strong> rather than money printed out of nowhere. True value for value'}/>
				</ul>
				<p>
					Invoices will always be in GBP.
				</p>
				<BtcAcceptedHere />
			</>
		)
	}
}

export const GetInTouchContent = {
	title: "Get in touch / Links",
	bodyContent: () => {
		const email = 'email: <a href="mailto:barry@br-web.me">barry@br-web.me</a>'
		const x = 'X: <a href="https://x.com/bazzle">@bazzle</a>'
		const linkedIn = <Link href="https://www.linkedin.com/in/br-web">LinkedIn</Link>
		const cv = <Link href="./files/cv.pdf">CV</Link>
		const gitHub = <Link href="https://github.com/bazzle">GitHub</Link>
		const nostr = <NostrCopy/>
		const workWithMe = <Link href="/work-with-me">Lets work together</Link>
		const thoughts = <Link href="https://thoughts2.netlify.app/">Thoughts</Link>
		return(
			<>
				<HorizontalList listItems={[email]} heading="Get in touch:" />
				<HorizontalList listItems={[x, nostr]} heading="Socials:" />
				<HorizontalList listItems={[cv, linkedIn, gitHub, thoughts]} heading="Other links:" />
			</>
		)
	}
}


