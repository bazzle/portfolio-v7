import ListItem from '@/app/ui/project/components/ListItem'
import IconThemes from '@/app/ui/project/misc/Icons/IconThemes'
import NostrCopy from '@/app/ui/project/components/NostrCopy'
import HorizontalList from '@/app/ui/project/components/HorizontalList'
import Link from 'next/link'
import CurrentStatus from '@/app/ui/project/components/CurrentStatus'

export const nameTitle = {
	name: 'Barry Richards',
	title: 'Design Engineer',
}

export const headerTitle = (
	<>
		<span className="highlight-on-link">{nameTitle.name}</span>
		<span>{nameTitle.title}</span>
	</>
)

export const sectionLinksHome = [
	{ name: 'Who am I', id: 'who-am-i' },
	{ name: 'What am I', id: 'what-am-i' },
	{ name: 'Showcase and thoughts', id: 'showcase-thought-pieces' },
	{ name: 'Things I think about', id: 'things-i-think-about' },
	{ name: 'Work history', id: 'work-history' },
	{ name: 'Get in Touch', id: 'get-in-touch' },
]

export const CurrentStatusContent = {
	label: 'Currently',
	value: () => {
		return (
			<>
				On the GovPress team at <a href="https://www.dxw.com/">dxw</a>. Where I
				design public and 3rd sector websites and carry out accessibility
				audits.
			</>
		)
	},
}

export const WelcomeContent = {
	title: 'Who am I?',
	bodyContent: () => {
		return (
			<>
				<ul>
					<ListItem
						content={
							'<strong>I’m a creative pragmatist.</strong> I embrace creative freedom aswell as constraints'
						}
					/>
					<ListItem
						content={
							'<strong>I’m a design minimalist.</strong> I believe small changes can make massive differences'
						}
					/>
					<ListItem
						content={
							'<strong>I’m tech-agnostic.</strong> Always willing to learn relevant things'
						}
					/>
					<ListItem
						content={
							'<strong>I’m receptive to implementation.</strong> Designing for developers aswell as users'
						}
					/>
					<ListItem
						content={
							'<strong>I’m humble and user-centred.</strong> Sympathetic to the client and user needs'
						}
					/>
					<ListItem
						content={
							'<strong>Accessibility as my baseline.</strong> The foundation to build from'
						}
					/>
					<ListItem
						content={
							'<strong>Design principles and conventions</strong> help guide my decisions'
						}
					/>
					<ListItem
						content={
							'<strong>I use visual and interactive flair</strong> to create engaging experiences'
						}
					/>
					<ListItem
						content={
							'<strong>The impermanence of the web</strong> Is the reason I love it as a medium to build on.'
						}
					/>
				</ul>
				{CurrentStatus()}
			</>
		)
	},
}

export const HomepageCards = {
	title: 'Showcase and thought pieces',
	cards: [
		{
			imageSrc: '/images/posts/satoshi-power-featured.png',
			imageAlt: 'Sat logo',
			title: 'Satoshi Power',
			description:
				'Fun project looking at how the price of a satoshi compares to the smallest units of different fiat currencies. Pulling data from blockchain.com API',
			link: '/thoughts/2025-12-11',
		},
		{
			imageSrc: '/images/posts/bfi-featured.png',
			imageAlt: 'BFI Screen Culture logo',
			title: 'BFI Screen Culture 2033',
			description: 'Website for BFI\'s 10 year strategy',
			link: '/thoughts/2025-01-24',
		},
		{
			imageSrc: '/images/posts/business-case-for-engineer-featured2.png',
			imageAlt: '3D printer building a browser',
			title: 'The case for the Design Engineer',
			description: 'And why every delivery team should have one on the team',
			link: '/thoughts/2026-03-07',
		},
		{
			title: 'University Alliance',
			description: 'Website redesign and rebuild for University Alliance',
			link: '/thoughts/2025-01-26',
		},
		{
			title: 'Help to Grow',
			description:
				'Website redesign for Department for Business and Trade campaign website Help to Grow',
			link: '/thoughts/2025-01-25',
		},
		{
			title: 'The Tinkerer',
			description:
				'Shower thought, around the verb _to tinker_, and what this means in a Design Engineer context.',
			link: '/thoughts/2025-12-05',
		},
		{
			title: 'Bitcoin Truthbombs',
			description:
				'2 minute read articles about Bitcoin I write as I learn about the technology and economics.',
			link: '/thoughts/2025-08-02',
		},
		{
			title: 'Valuarchy',
			description:
				'Design and development for a single page website for a novel new voting system',
			link: '/thoughts/2026-01-03',
		},
		{
			title: 'My relationship with AI',
			description:
				'I\'ve been cautious about AI, I\'ve had a strong desire to embrace it to improve my productivity and help my learning but formed some boundaries.',
			link: '/thoughts/2025-06-01',
		},
	],
}

export const TextStandout1 = {
	prefix: 'Where I like to sit',
	content:
		'In the intersection of design and development — I find the two disciplines equally interesting. The less binary my positioning, the more meaningful my contributions',
}

export const TextStandout2 = {
	prefix: 'Things I think about',
	content:
		'I embrace all facets of the front-end of a website or interface. I see them as separate pieces of the overall puzzle',
}

export const TextStandout3 = {
	content: 'Thankyou, please get in touch if you’d like to know more!',
}

export const SkillsContent = {
	title: 'Skills and Expertise',
	bodyContent: () => {
		return (
			<>
				<p className="text-intro">
					Through my process of web design and development, I meet the
					functional needs of the product, while keeping in mind accessibility
					and adding some visual and interactive flourish — Which I call{' '}
					<Link href="/thoughts/2026-03-16">The Subtle Art of Making things POP</Link>
					.
				</p>
				<p>
					I&apos;m comfortable working with content management systems and modern
					JavaScript frameworks, picking up new tools as the project demands. My
					depth is in bridging accessible design and technical implementation.
				</p>
				<p>
					I work on interfaces — delivering wireframes, mockups and production
					code. I work within agile teams, collaborating closely with content
					designers, developers, researchers and stakeholders to shape products
					that are usable and inclusive.
				</p>
			</>
		)
	},
	skillsActions: [
		'Anticipate issues',
		'Design in the browser',
		'Understand constraints',
		'Find middle ground',
	],
	skillsItems: [
		{ id: 1, name: 'HTML', rating: 5 },
		{ id: 2, name: 'CSS/SASS', rating: 5 },
		{ id: 3, name: 'WordPress', rating: 5 },
		{ id: 4, name: 'Figma', rating: 5 },
		{ id: 5, name: 'Vanilla JS', rating: 5 },
		{ id: 6, name: 'Git', rating: 5 },
		{ id: 7, name: 'React/JSX', rating: 4 },
		{ id: 8, name: 'PHP', rating: 4 },
		{ id: 9, name: 'Next JS', rating: 3 },
		{ id: 10, name: 'TypeScript', rating: 3 },
		{ id: 11, name: 'Tailwind', rating: 3 },
		{ id: 12, name: 'Vue', rating: 2 },
	],
}

export const ThemesContent = {
	title: 'On repeat',
	themesItems: [
		{
			component: IconThemes.IconDoor,
			nameFirstLine: 'Accessibility',
			description:
				'Accessibility is my baseline. The web is for all. Designing and developing for disabilities makes the experience better for everyone. I keep up to date with the latest guidelines and best practices.',
		},
		{
			component: IconThemes.IconFingerprint,
			nameFirstLine: 'User-centered design',
			description:
				'I believe in designing for the user, the beneficiary of the product. Leaning on recognised conventions can only get you so far. A good product is informed by the user.',
		},
		{
			component: IconThemes.IconBalance,
			nameFirstLine: 'Hierarchy, balance, white-space and grid',
			description:
				'The often overlooked principles of design. I put a lot of attention into the balance of elements, the flow and rhythm of content on a page, and the visual cues that communicate hierarchy.',
		},
		{
			component: IconThemes.IconPieces,
			nameFirstLine: 'Typography and iconography',
			description:
				'Interfaces are made up of text and graphic elements yet the importance of these choices can be downplayed. I see them as fundamental. Amidst the trend towards homogeneity, experimenting makes a huge difference.',
		},
		{
			component: IconThemes.IconGlass,
			nameFirstLine: 'Responsive, intrinsic web',
			description:
				'As Bruce Lee once said "Be like water". Content and components should be constrained by the container. I outsource responsive behaviour to modern CSS techniques like flexbox, grid and text-wrap. I see fixed widths and the notion of pixel perfection as relics of the past.',
		},
		{
			component: IconThemes.IconTag,
			nameFirstLine: 'Semantics',
			description:
				'Attaching names to things is fundamental to how we interpret things in the physical world. Writing semantic HTML that\'s legible to browsers, assistive tech and search engines, commands the same importance within the digital world.',
		},
		{
			component: IconThemes.IconAi,
			nameFirstLine: 'Integrating AI in My Workflow',
			description:
				'AI is a multiplier, my second brain, not a replacement for my current one. I use it to accelerate research, explore ideas faster and handle the repetitive parts of development — freeing me to focus on the decisions that actually need a human eye.',
		},
		{
			component: IconThemes.IconMagGlass,
			nameFirstLine: 'Search Engine Optimisation',
			description:
				'Good SEO starts with good engineering. Semantic markup, performance, accessibility — most of what matters for search is what I\'d be doing anyway. I focus on the technical foundations that give content the best chance of being found.',
		},
	],
}

export const WorkSamplesContent = {
	title: 'Work samples coming soon!',
}

export const WorkHistoryContent = {
	title: 'My story so far',
	workHistoryItems: [
		{
			name: 'dxw',
			id: 'dxw',
			startDate: 2021,
			endDate: 'present',
			clients: [
				'British Film Institute',
				'Ministry of Justice',
				'Office for National Statistics',
				'Ministry of Justice',
				'University Alliance',
				'National Health Service',
				'National Audit Office',
			],
			intro:
				'dxw is a digital agency that works with the public and third sectors to achieve better outcomes for citizens and business, and replacing legacy systems with more efficient and sustainable digital products',
			content: () => {
				return (
					<>
						<p>
							After a spell of freelancing, I was offered a permanent role
							within the GovPress team. Focussing on content managed websites
							for our clients. Much of my work is updating websites with new
							brand guidelines and migrating to the new Gutenburg block editor.
						</p>
						<p>
							My first project was the design of the{' '}
							<a href="https://blog.bfi.org.uk/">Screen Culture 2033</a>{' '}
							strategy micro-site and blog. I also paired with the tech-lead in
							the development of the site, using WordPress and utilising
							elements from BFI’s style guide.
						</p>
						<p>
							I also joined the Interaction Design team to develop a tool for
							Probation officers to find temporary accommodation for prison
							leavers at risk of homelessness. Using the GOV.UK design system
							and elements from the MoJ pattern library, I designed the service
							up until nation-wide rollout. Responding to several rounds of user
							testing.
						</p>
					</>
				)
			},
		},
		{
			name: 'Hamilton Brown',
			id: 'hamilton-brown',
			startDate: 2020,
			endDate: 2021,
			clients: ['BDO Store', 'Lionpoint'],
			intro:
				'Hamilton-Brown is a full-service creative agency based in London. They deliver dedicated B2B support where and when needed for regional and global clients.',
			content: () => {
				return (
					<>
						<p>
							As part of the digital team designing and developing B2B marketing
							and campaign websites, I was instrumental in transitioning our
							build process from page-builder tools to bespoke WordPress
							development. I designed and assited the development of a
							storefront for a corporate accounting company that sells various
							digital accounting tools. And maintained the product through
							multiple releases over the course of about a year.
						</p>
					</>
				)
			},
		},
		{
			name: 'Freelance',
			id: 'freelance',
			startDate: 2015,
			endDate: 'present',
			clients: [
				'Fat Beehive',
				'Geckoboard',
				'Shelter',
				'Recipe',
				'Helpful Digital',
			],
			intro: 'I have done various contracts for companies in London',
			content: () => {
				return (
					<>
						<h4>Fat Beehive</h4>
						<p>
							Fat Beehive are a digital agency serving the charity sector. I was
							involved in wireframing, look and feel design and build of several
							websites including The British Academy, Chevening and Croydon
							Pride.
						</p>
						<h4>Geckoboard</h4>
						<p>
							Geckoboard produce TV dashboards to display key performance data
							for customer service and SAAS companies. I worked on the main
							website, and various campaign landing pages.
						</p>
						<h4>Shelter</h4>
						<p>
							Working within the digital and marketing teams, I was involved in
							the build of landing pages and email campaigns using the brand
							guidelines. I also did some front-end work on the main website,
							addressing support requests.
						</p>
						<h4>Recipe</h4>
						<p>
							Recipe are an advertising agency. I worked on their advertising
							marketplace web app, linking companies looking for ad space with
							networks. Involved in the discovery phase, wireframing and
							mockups.
						</p>
						<h4>Helpful Digital</h4>
						<p>
							Helpful do training and web builds for government initiatives and
							charities. I designed and built various websites including a
							government owned property company and a fund for tech startups in
							Africa. I also worked on various digital tools Helpful use for
							crisis traning.
						</p>
					</>
				)
			},
		},
		{
			name: 'Stepladder',
			id: 'stepladder',
			startDate: 2013,
			endDate: 2015,
			intro:
				'Stepladder is a branding agency that specialises in the high-end commercial property market. Capturing the energy of spaces through strategic thinking and distinctive creative campaigns.',
			content: () => {
				return (
					<>
						<p>
							Stepladder produces printed material to an extremely high standard
							of quality, using high grade materials and cutting-edge printing
							techniques. I was brought in to extend this standard to their
							online material. Working with the designers to translate their
							brand designs to digital form. I produced interactive interfaces
							for users to find out about local amenities, infrastructure and
							the characteristics of the spaces themselves — maps,
							representations of floor plans and various layout configurations.
						</p>
					</>
				)
			},
		},
	],
}

export const WhatNextContent = {
	title: 'What\'s next?',
	bodyContent: () => {
		return (
			<>
				<p>
					I am looking for a job where I have the opportunity to both use my
					existing experience and diversify my current skill-set by tackling new
					things, as I firmly believe in learning by doing. I try to avoid
					environments that impose rigid specialisation, preferring flexibility
					to an extent. My perfect employer would be a small to medium sized
					organisation that creates value by doing something innovative and
					perhaps against the mould. I am passionate about new technologies and
					paradigms. Decentralised protocols such as Bitcoin and Nostr interest
					me greatly.
				</p>
				<p>
					If you want to chat, please{' '}
					<Link href="mailto:barry@br-web.me">drop me an email!</Link>
				</p>
			</>
		)
	},
}

// work with me page

export const ContentSection2 = {
	title: 'What can I do for you?',
	bodyContent: () => {
		return (
			<>
				<p>
					I have experience designing and developing websites, I self-identify
					as a web design Engineer.
				</p>
				<p>
					What does this mean in practical terms? What can I <em>really</em> do
					for you? The no-fluff answer as ChatGPT would say.
				</p>
				<p>
					I can improve the look and feel of your website. I can audit your
					website for optimal accessibility to the latest WCAG guidelines. I can
					make on-page optimisations for search engines.
				</p>
				<p>
					OR, I can produce wireframes and high-fidelity mockups at the early
					stages of your website or web app development.
				</p>
			</>
		)
	},
}

export const ContentSection3 = {
	title: 'Why Bitcoin?',
	bodyContent: () => {
		return (
			<>
				<p>
					I do accept Bitcoin for my services. In fact I prefer it as form of
					payment. Why?
				</p>
				<ul>
					<ListItem content={'Reason 1'} />
					<ListItem content={'Reason 2'} />
					<ListItem content={'Reason 3'} />
					<ListItem content={'Reason 4'} />
				</ul>
			</>
		)
	},
}

export const GetInTouchContent = {
	title: 'Get in touch / Links',
	bodyContent: () => {
		const email = '<a href="mailto:barry@br-web.me">barry@br-web.me</a>'
		const x = '<a href="https://x.com/bazzle">X</a>'
		const linkedIn = <a href="https://www.linkedin.com/in/br-web">LinkedIn</a>
		const cv = <a href="./files/cv.pdf">CV</a>
		const gitHub = <a href="https://github.com/bazzle">GitHub</a>
		const nostr = '<a href="https://njump.me/bazzle@br-web.me">Nostr</a>'
		const workWithMe = <Link href="/work-with-me">Lets work together</Link>
		const thoughts = <a href="https://thoughts2.netlify.app/">Thoughts</a>
		return (
			<>
				<HorizontalList listItems={[email]} heading="Email:" />
				<HorizontalList listItems={[x, nostr, linkedIn]} heading="Socials:" />
				<HorizontalList
					listItems={[cv, gitHub, thoughts]}
					heading="Other links:"
				/>
			</>
		)
	},
}
