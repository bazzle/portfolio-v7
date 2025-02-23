import ListItem from "@/app/components/components/list-item";
import IconGlass from "@/app/components/icons/icon-glass.jsx";
import IconDoor from "@/app/components/icons/icon-door.jsx";
import IconMagGlass from "@/app/components/icons/icon-mag-glass.jsx";
import IconPieces from "@/app/components/icons/icon-pieces.jsx";
import IconShapes from "@/app/components/icons/icon-shapes.jsx";
import IconTag from "@/app/components/icons/icon-tag.jsx";
import IconFingerprint from "@/app/components/icons/icon-fingerprint";
import IconBalance from "@/app/components/icons/icon-balance";

export const nameTitle = {
	name: "Barry Richards",
	title: "Web design engineer"
}

export const WelcomeContent = {
	title: "Who I am and what I do",
	bodyContent: () => {
		return(
			<>
				<p>
					<strong>I‘m Barry. I design websites and web apps</strong> I deliver wireframes, mockups and interactive prototypes, and I build websites using WordPress and JavaScript based approaches like NextJS. I contribute to digital teams by carrying out various tasks within my <a href="#skills-and-abilities">skillset</a>. And to production build by leveraging my knowledge and experience using front-end languages and frameworks.
				</p>
				<p>
					<strong>I have been working as a designer and developer to different capacities on a variety of projects throughout my career</strong>. I‘m currently with the great people at dxw working on websites for public and third-sector organisations. Working within this sector has instilled in me an appreciation for web standards, accessibility and user centred design. Principles which form my baseline.
				</p>
				<p>
					<strong>From there I seek to bring understated visual flair</strong> using typography, hierarchy, animation, colour and other web design fundamentals. I‘m a design minimalist, I believe small changes can make huge differences. I take a pragmatic approach and I‘m sympathetic to client and user needs. I love to figure out how to improve a piece of the interface, or change the look and feel to unlock that elusive missing piece.
				</p>
				<p>
					<strong>People talk a lot about their “happy place”</strong> and what they are inspired by to make them get up in the morning to work. I‘m inspired by the emancipating effects of technology coupled with great user experience. I‘m interested in the psychology of how people respond to design. And to this end, I like to experiment with elements of the design to affect how people engage and interact with it.
				</p>
			</>
		)
	}
}

export const TextBlocks = [
	"I call myself a design engineer because I like to occupy the intersection of visual design and web development. I find the two disciplines equally captivating."
]

export const SkillsContent = {
	title: "Skills and Expertise",
	bodyContent: () => {
		return(
			<>
				<p>
					I have experience in many phases of development, with varying levels of involvement within Agile and Kanban development teams. I create wireframes, build interactive prototypes, assist user research sessions, facilitate collaborative design sessions and work with developers in production build. I’m also an accessibility auditor. Not to forget the less flashy things like responding to support requests, accessibility remediation work and working on legacy code.
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
        { id: 1, name: 'HTML/DOM',  rating: 5 },
        { id: 2, name: 'CSS/SASS',  rating: 5 },
        { id: 3, name: 'Vanilla JS',  rating: 4 },
        { id: 4, name: 'React',  rating: 3 },
        { id: 5, name: 'Git',  rating: 4 },
        { id: 6, name: 'WordPress',  rating: 4 },
        { id: 7, name: 'PHP',  rating: 3 },
        { id: 8, name: 'Three.js',  rating: 1 },
        { id: 9, name: 'Figma',  rating: 5 }
	]
}

export const themesContent = {
	title: 'Things I think about',
	tiles: [
		{
			component: <IconGlass />,
			name: "Responsive web",
			description: "Throughout every stage of the design and development process, I think about how the interface will appear in different size viewports."
		},
		{
			component: <IconDoor />,
			name: "Accessibility",
			description: "I design with inclusivity in mind, ensuring digital experiences are usable for everyone, including those with disabilities, by following WCAG guidelines."
		},
		{
			component: <IconTag />,
			name: "Semantics",
			description: "I prioritize clean, meaningful HTML structure to enhance SEO, accessibility, and maintainability, ensuring content is understood by both users and machines."
		},
		{
			component: <IconPieces />,
			name: "Typography",
			description: "Thoughtful typography improves readability and hierarchy, reinforcing brand identity while ensuring accessibility across different screens and contexts."
		},
		{
			component: <IconFingerprint />,
			name: "User-Centered Design",
			description: "Every design decision is guided by user needs, balancing aesthetics with functionality to create intuitive and engaging experiences."
		},
		{
			component: <IconShapes />,
			name: "Brand integration",
			description: "I align design with brand values, creating cohesive experiences that strengthen identity, build trust, and foster meaningful user connections."
		},
		{
			component: <IconBalance />,
			name: "Hierarchy, Balance, White-Space",
			description: "I carefully structure layouts using visual hierarchy, balance, and white space to guide attention, improve readability, and create a refined user experience."
		},
		{
			component: <IconMagGlass />,
			name: "Search Engine Optimisation",
			description: "I build websites with SEO in mind. Semantic structure, performance optimisation, and meaningful content—to improve visibility and user engagement."
		},
		{
			name: "Integrating AI in My Workflow",
			description: "I leverage AI tools to enhance efficiency, automate repetitive tasks, and generate insights, ensuring smarter design and development decisions."
		},
		{
			name: "Content Management",
			description: "I develop user-friendly content management solutions that empower clients to update and maintain their websites with ease and flexibility."
		},
		{
			name: "Layout/Grid",
			description: "A strong grid system ensures consistency, flexibility, and visual harmony, adapting seamlessly to different devices and screen sizes."
		},
		{
			name: "Web Conventions",
			description: "I design with familiar patterns and best practices, ensuring usability and reducing cognitive load while maintaining a unique brand identity."
		},
	]
}

export const workSamplesContent = {
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
							My first project was the design of the Screen Culture 2033 strategy micro-site and blog. I also paired with the tech-lead in the development of the site, using WordPress and utilising elements from BFI’s style guide.
						</p>
						<p>
							I also joined the Interaction Design team to develop a tool for Probation officers to find temporary accommodation for prison leavers at risk of homelessness. Using the gov.uk design system and elements from the MoJ pattern library, I designed the service up until nation-wide rollout. Responding to several rounds of user testing.
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
						<h4>Fat Beehive</h4>
						<p>
							Fat Beehive are a digital agency serving the charity sector. I was involved in wireframing, look and feel design and build of several websites including The British Academy, Chevening and Croydon Pride.
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
				I am looking for a job where I have the opportunity to both use my existing experience and diversify my current skill-set by learning new things, as I firmly believe in learning by doing. My perfect employer would be a small to medium sized company that doesn’t have a rigid adherence to siloed job roles. And a company that creates value by doing something innovative and perhaps against the mould. I am passionate about new technologies and paradigms. Decentralised protocols such as Bitcoin and Nostr interest me greatly.
			</p>
			<p>
				If you have <b>something</b> you think I’d be interested in, please <a href="mailto:barry@br-web.me">drop me an email!</a>
			</p>
			</>
		)
	}
}

export const SignoffContent = {
	title: 'Thankyou, have a great day!'
}
