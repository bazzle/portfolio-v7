import ListItem from "@/app/ui/components/ListItem"

// work with me page

export const ContentSection1 = {
	title: "What can I do for you?",
	bodyContent: () => {
		return(
			<>
				<p>
					I have experience designing and developing websites, I self-identify as a web design tinkerer.
				</p>
				<p>
					What does this mean in practical terms? What can I <em>really</em> do for you? The no-fluff answer as ChatGPT would say.
				</p>
				<p>
					I can improve the look and feel of your website. I can audit your website for optimal accessibility to the latest WCAG guidelines. I can make on-page optimisations for search engines.
				</p>
				<p>
					OR, I can produce wireframes and high-fidelity mockups at the early stages of your website or web app development.
				</p>
			</>
		)
	}
}

export const TextStandout1 = "I have spent a fair chunk of time designing and developing websites. I self-identify as a web design tinkerer."
export const TextStandout2 = "Thankyou, have a great day!"

export const ContentSection2 = {
	title: "Why Bitcoin?",
	bodyContent: () => {
		return(
			<>
				<p>
					I do accept Bitcoin for my services. In fact I prefer it as form of payment. Why?
				</p>
				<ul>
					<ListItem content={'Reason 1'}/>
					<ListItem content={'Reason 2'}/>
					<ListItem content={'Reason 3'}/>
					<ListItem content={'Reason 4'}/>
				</ul>
			</>
		)
	}
}

export const GetInTouchContent = {
	title: "Get in touch",
	bodyContent: () => {
		const emailContent = 'email: <a href="#">email</a>';
		const xContent = 'X: <a href="https://x.com/bazzle">@bazzle</a>';
		const nostrContent = 'nostr: <a href="https://nosta.me/27a3d96de5945c3e9e522e63738ed289b1cfde8a7eca1fa31a953c3b23c87908">nosta.me</a>';
		return(
			<>
				<p>
					You can reach me by email or socials.
				</p>
				<ul>
					<ListItem content={emailContent}/>
					<ListItem content={xContent}/>
					<ListItem content={nostrContent}/>
				</ul>
			</>
		)
	}
}


