import ListItem from "@/app/components/components/list-item";

export const WelcomeContent = {
	title: "Welcome",
	bodyContent: () => {
		return(
			<>
			<p>
				Throughout my career of over a decade of delivering web projects – working with some great people, keeping an open mind and constantly learning and iterating – I believe I have forged an optimal approach to deliver fantastic web projects and a <b>set of principles</b> that I stand by as much as I can.
			</p>
			<p>
				My work within the public sector for Helpful Digital and dxw has instilled in me strong appreciation for accessibility. One thing I’ve carried with me is the notion that accessibility standards aren’t exclusively for people with disabilities. In catering to disabilites we’re making the web better for everyone.
			</p>
			<p>
				When I design a website, I think of accessibility as a baseline. From there, I seek to bring understated creative flair, using typography, hierarchy, animation and colour. I’m experienced at working with clients to help unlock that missing piece, that elusive “pop” that their website needs. I’m a design minimalist, I believe small changes make big differences. I take a pragmatic approach and I’m sympathetic to client and user needs.
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
					People talk a lot about their “happy place”. For me it’s being creative and experimenting, utilising the wealth of freely available languages and libraries. I have extensive experience with fundamental front-end technologies including vanilla javascript, and I’m getting to grips with React. I’ve worked on WordPress projects extensively throughout my professional experience. 
				</p>
				<p>
					I have experience in many phases of development, with varying levels of involvement within Agile and Kanban development teams. I have created initial wireframes, built interactive prototypes, assisted user research sessions, developed mockups in Figma and collaborated with other developers in production build. Aswell as the less flashy things like responding to support requests, conducting accessibility audits and carrying out the necessary remediation work.
				</p>
			</>
		)
	},
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
	title: 'Things I think about'
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
			intro: "dxw is a digital agency that works with the public and third sectors.",
			content: () => {
				return(
					<>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
						</p>
					</>
				)
			}
		},
		{
			name: "Hamilton Brown",
			id: "hamilton-brown",
			startDate: 2015,
			endDate: 2018,
			clients: ["BDO Store", "Lionpoint"],
			intro: "Hamilton-Brown is a creative agency based in London",
			content: () => {
				return(
					<>
						<p>This is an &ldquo;example&rdquo; sentence in JSX.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
						</p>
					</>
				)
			}
		},
		{
			name: "Stepladder",
			id: "stepladder",
			startDate: 2015,
			endDate: 2018,
			clients: ["Canary Wharf Group"],
			intro: "Stepladder is a creative agency based in London",
			content: () => {
				return(
					<>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
						</p>
					</>
				)
			}
		}
	]
}

export const SignoffContent = {
	title: 'Thankyou, have a great day!'
}


export const WhatNextContent = {
	title: "What's next?",
	bodyContent: () => {
		return(
			<>
			<p>
				dsdsds
			</p>
			</>
		)
	}
}