import ListItem from "@/app/ui/components/ListItem";
import {
        IconGlass,
        IconDoor,
        IconMagGlass,
        IconPieces,
        IconShapes,
        IconTag,
        IconFingerprint,
        IconBalance,
        IconAi,
        IconGrid,
		IconCopy
} from "@/app/ui/components/Icons";
import NostrCopy from "@/app/ui/components/NostrCopy";
import HorizontalList from "@/app/ui/components/HorizontalList";
import Link from "next/link";

export const NameTitle = {
	name: "Barry Richards",
	title: "Design tinkerer"
}

export const WelcomeContent = {
	title: "Who I am and what I do",
	bodyContent: () => {
		return(
			<>
				<p>
					<strong>I’m Barry.</strong> Front-end developer and designer. I design and build websites using languages and tools within my <a href="#skills-and-abilities">skillset</a>.
				</p>
				<p>
					I’m currently working with the great people at <a href="https://www.dxw.com/">dxw</a>. Where I design, build and carry out accessibility audits.
				</p>
				<ul>
					<ListItem content={'I’m <strong>constantly curious</strong> and always learning new things.'}/>
					<ListItem content={'I’m a <strong>designer through and through</strong>. Inspired by aesthetics and feel.'}/>
					<ListItem content={'I’m a <strong>design minimalist</strong>. I believe small changes can make massive differences.'}/>
					<ListItem content={'I’m a <strong>creative pragmatist</strong>. I like creative freedom aswell as constraints.'}/>
					<ListItem content={'I love the <strong>impermanence of the web</strong> as a medium to design for. To test on, to rethink and iterate.'}/>
					<ListItem content={'I love to <strong>problem solve</strong>—figure out how to improve a piece of the interface, or change the look and feel to unlock that elusive missing piece. And I’m sympathetic to client and user needs.'}/>
				</ul>
			</>
		)
	}
}

export const TextStandout1 = "I call myself a design engineer / tinkerer because I like to occupy the intersection of visual design and web development. I find the two disciplines equally interesting."

export const TextStandout2 = "I embrace all facets of web design and development. I see them as separate parts of the whole."

export const TextStandout3 = "Thankyou, have a great day!"

export const SkillsContent = {
	title: "Skills and Expertise",
	bodyContent: () => {
		return(
			<>
				<p>
					I have experience in many phases of development, with varying levels of involvement within Agile and Kanban development teams. I create wireframes, build mockups and interactive prototypes, assist user research sessions, facilitate collaborative design sessions and work with other developers in production build. I also carry out accessibility audits using automated tools and manual testing. I primarily build websites using WordPress that use either the classic or the Gutenburg block editor.
				</p>
				<p>
					I‘ve also been exploring building websites and apps using vanilla JS and frameworks such as React + NextJS and Vue + Nuxt.js. I am adaptable and a fast learner to different tech stacks.
				</p>
			</>
		)
	},
	skillsActions: [
		"Anticipate issues",
		"Design in the browser",
		"Understand constraints",
		"Find middle ground"
	],
	skillsItems: [
        { id: 1, name: 'HTML',  rating: 5 },
        { id: 2, name: 'CSS/SASS',  rating: 5 },
		{ id: 3, name: 'WordPress',  rating: 5 },
		{ id: 4, name: 'Figma',  rating: 5 },
        { id: 5, name: 'Vanilla JS',  rating: 5 },
        { id: 6, name: 'Git',  rating: 5 },
		{ id: 7, name: 'React/JSX',  rating: 4 },
		{ id: 8, name: 'PHP',  rating: 4 },
		{ id: 9, name: 'Next JS',  rating: 3 },
		{ id: 10, name: 'TypeScript',  rating: 3 },
		{ id: 11, name: 'Tailwind',  rating: 3 },
        { id: 12, name: 'Vue',  rating: 2 },
	]
}

export const ThemesContent = {
	title: 'Things I think about',
	tiles: [
		{
			component: <IconGlass />,
			nameFirstLine: "Responsive web",
			description: "Throughout every stage of the design and development process, I think about how the interface will appear in different size viewports."
		},
		{
			component: <IconDoor />,
			nameFirstLine: "Accessibility",
			description: "I design with inclusivity in mind, ensuring digital experiences are usable for everyone, including those with disabilities, by following WCAG guidelines."
		},
		{
			component: <IconTag />,
			nameFirstLine: "Semantics",
			description: "I strive to build with clean, meaningful HTML structure to enhance SEO, accessibility, and maintainability, ensuring content is understood by users and machines."
		},
		{
			component: <IconPieces />,
			nameFirstLine: "Typography",
			description: "I appreciate the value of good typographical choices. Something often overlooked in more tech focussed teams. And I stay up to date with new techniques such Variable and Opentype features."
		},
		{
			component: <IconFingerprint />,
			nameFirstLine: "User-Centered",
			nameSecondLine: "Design",
			description: "I appreciate how design should be guided by user needs and behaviour. I use esdtablished and tested design patterns and seek to validate design choices with user research when possible."
		},
		{
			component: <IconShapes />,
			nameFirstLine: "Brand",
			nameSecondLine: "integration",
			description: "I have extensive experience collaborating with brand designers and guardians, ensuring that visual identities and messaging are accurately and effectively translated into the digital products."
		},
		{
			component: <IconBalance />,
			nameFirstLine: "Hierarchy, Balance,",
			nameSecondLine: "White-Space",
			description: "I carefully structure layouts using visual hierarchy, balance, and white space to guide attention, improve readability, and create a refined user experience."
		},
		{
			component: <IconMagGlass />,
			nameFirstLine: "Search Engine",
			nameSecondLine: "Optimisation",
			description: "I build websites with SEO in mind. Semantic structure, performance optimisation, and meaningful content—to improve visibility and engagement."
		},
		{
			component: <IconAi />,
			nameFirstLine: "Integrating AI",
			nameSecondLine: "in My Workflow",
			description: "I leverage AI tools to enhance efficiency in my workflow, automate repetitive tasks, assist my learning and ensuring smarter design and development decisions."
		},
		{
			component: <IconGrid />,
			nameFirstLine: "Layout/Grid",
			description: "I have experience utilising advanced layout systems in CSS, including flexbox and grid. I know the advantages and drawbacks of different techniques and can identify the best approach for each."
		}
	]
}

export const WorkSamplesContent = {
	title: 'Work samples coming soon!'
}

export const WorkHistoryContent = {
	title: 'My story so far',
	workHistoryItems: [
		{
			name: "dxw",
			id: "dxw",
			startDate: 2021,
			endDate: 'present',
			clients: [
				"British Film Institute",
				"Ministry of Justice",
				"Office for National Statistics",
				"Ministry of Justice",
				"University Alliance",
				"National Health Service",
				"National Audit Office"
			],
			intro: "dxw is a digital agency that works with the public and third sectors to achieve better outcomes for citizens and business, and replacing legacy systems with more efficient and sustainable digital products",
			content: () => {
				return(
					<>
						<p>
							After a spell of freelancing, I was offered a permanent role within the GovPress team. Focussing on content managed websites for our clients. Much of my work is updating websites with new brand guidelines and migrating to the new Gutenburg block editor.
						</p>
						<p>
							My first project was the design of the <a href="https://blog.bfi.org.uk/">Screen Culture 2033</a> strategy micro-site and blog. I also paired with the tech-lead in the development of the site, using WordPress and utilising elements from BFI’s style guide.
						</p>
						<p>
							I also joined the Interaction Design team to develop a tool for Probation officers to find temporary accommodation for prison leavers at risk of homelessness. Using the GOV.UK design system and elements from the MoJ pattern library, I designed the service up until nation-wide rollout. Responding to several rounds of user testing.
						</p>
					</>
				)
			}
		},
		{
			name: "Hamilton Brown",
			id: "hamilton-brown",
			startDate: 2020,
			endDate: 2021,
			clients: ["BDO Store", "Lionpoint"],
			intro: "Hamilton-Brown is a full-service creative agency based in London. They deliver dedicated B2B support where and when needed for regional and global clients.",
			content: () => {
				return(
					<>
						<p>
							As part of the digital team designing and developing B2B marketing and campaign websites, I was instrumental in transitioning our build process from page-builder tools to bespoke WordPress development. I designed and assited the development of a storefront for a corporate accounting company that sells various digital accounting tools. And maintained the product through multiple releases over the course of about a year.
						</p>
					</>
				)
			}
		},
		{
			name: "Freelance",
			id: "freelance",
			startDate: 2015,
			endDate: "present",
			clients: [
				"Fat Beehive",
				"Geckoboard",
				"Shelter",
				"Recipe",
				"Helpful Digital"
			],
			intro: "I have done various contracts for companies in London",
			content: () => {
				return(
					<>
						<h4>Fat Beehive</h4>
						<p>
							Fat Beehive are a digital agency serving the charity sector. I was involved in wireframing, look and feel design and build of several websites including The British Academy, Chevening and Croydon Pride.
						</p>
						<h4>Geckoboard</h4>
						<p>
							Geckoboard produce TV dashboards to display key performance data for customer service and SAAS companies. I worked on the main website, and various campaign landing pages.
						</p>
						<h4>Shelter</h4>
						<p>
							Working within the digital and marketing teams, I was involved in the build of landing pages and email campaigns using the brand guidelines. I also did some front-end work on the main website, addressing support requests.
						</p>
						<h4>Recipe</h4>
						<p>
							Recipe are an advertising agency. I worked on their advertising marketplace web app, linking companies looking for ad space with networks. Involved in the discovery phase, wireframing and mockups.
						</p>
						<h4>Helpful Digital</h4>
						<p>
							Helpful do training and web builds for government initiatives and charities. I designed and built various websites including a government owned property company and a fund for tech startups in Africa. I also worked on various digital tools Helpful use for crisis traning.
						</p>
					</>
				)
			}
		},
		{
			name: "Stepladder",
			id: "stepladder",
			startDate: 2013,
			endDate: 2015,
			intro: "Stepladder is a branding agency that specialises in the high-end commercial property market. Capturing the energy of spaces through strategic thinking and distinctive creative campaigns.",
			content: () => {
				return(
					<>
						<p>
							Stepladder produces printed material to an extremely high standard of quality, using high grade materials and cutting-edge printing techniques. I was brought in to extend this standard to their online material. Working with the designers to translate their brand designs to digital form. I produced interactive interfaces for users to find out about local amenities, infrastructure and the characteristics of the spaces themselves — maps, representations of floor plans and various layout configurations.
						</p>
					</>
				)
			}
		}
	]
}

export const WhatNextContent = {
	title: "What's next?",
	bodyContent: () => {
		return(
			<>
			<p>
				I am looking for a job where I have the opportunity to both use my existing experience and diversify my current skill-set by tackling new things, as I firmly believe in learning by doing. I try to avoid environments that impose rigid specialisation, preferring flexibility to an extent. My perfect employer would be a small to medium sized organisation that creates value by doing something innovative and perhaps against the mould. I am passionate about new technologies and paradigms. Decentralised protocols such as Bitcoin and Nostr interest me greatly.
			</p>
			<p>
				If you want to chat, please <a href="mailto:barry@br-web.me">drop me an email!</a>
			</p>
			</>
		)
	}
}

export const CardGridContent = {
	title: "Working on / thinking about",
	gridItems : [
		{
			imageSrc : "/images/cards/whois.webp",
			imageAlt : "Figure with a question-mark for a head",
			title : "Bitcoin Truthbombs",
			description : "2 minute read articles about Bitcoin I write as I learn about the technology and economics.",
			link : "https://br-web.me/thoughts/bitcoin-truthbombs"
		},
		{
			imageSrc : "/images/cards/sat-power2.webp",
			imageAlt : "Sat logo",
			title : "Satoshi Power",
			description : "Fun project looking at how the price of a satoshi compares to the smallest units of different fiat currencies. Pulling data from blockchain.com",
			link : "https://br-web.me/thoughts/satoshi-power"
		},
		{
			imageSrc : "/images/cards/exponential.png",
			imageAlt : "Exponential curve depiction",
			title : "My relationship with AI",
			description : "I've been cautious about AI, I've had a strong desire to embrace it to improve my productivity and help my learning but formed some boundaries.",
			link : "https://br-web.me/thoughts/my-relationship-with-ai"
		}
	]
}

// work with me page

export const ContentSection2 = {
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

export const ContentSection3 = {
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
	title: "Get in touch / Links",
	bodyContent: () => {
		const email = 'email: <a href="mailto:barry@br-web.me">barry@br-web.me</a>'
		const x = 'X: <a href="https://x.com/bazzle">@bazzle</a>'
		const linkedIn = <a href="https://www.linkedin.com/in/br-web">LinkedIn</a>
		const cv = <a href="./files/cv.pdf">CV</a>
		const gitHub = <a href="https://github.com/bazzle">GitHub</a>
		const nostr = <NostrCopy/>
		const workWithMe = <Link href="/work-with-me">Lets work together</Link>
		const thoughts = <a href="https://thoughts2.netlify.app/">Thoughts</a>
		return(
			<>
				<HorizontalList listItems={[email]} heading="Get in touch:" />
				<HorizontalList listItems={[x, nostr]} heading="Socials:" />
				<HorizontalList listItems={[cv, linkedIn, gitHub, thoughts]} heading="Other links:" />
			</>
		)
	}
}

