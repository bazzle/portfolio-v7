import IndexItem from '@/app/ui/project/modules/blog/IndexItem'
import getPostMetadata from '@/app/utils/get-post-metadata'
import Header from '@/app/ui/style-library/components/Header'
import HeroSmall from '@/app/ui/project/modules/HeroSmall'
import { headerTitle } from '@/app/content/BodyContent'

export default function Home() {
	const postMetaData = getPostMetadata('posts')
	const headerLinks = [{
		'text': 'Homepage',
		'target': '/',
		'arrowDirection': 'reverse',
	}]
	return (
		<>
			<Header
				headerTitle={headerTitle}
				headingLevel={2}
				navLinks={headerLinks}
			/>
			<main className="main">
				<HeroSmall title="Articles" />
				{postMetaData.map((post, postIndex) => (
					<IndexItem key={postIndex} post={post} location="indexMain" />
				))}
			</main>
		</>
	)
}
