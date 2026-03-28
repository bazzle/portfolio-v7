import IndexItem from '@/app/ui/project/modules/blog/IndexItem'
import getPostMetadata from '@/app/utils/get-post-metadata'
import Header from '@/app/ui/project/modules/Header'
import HeroSmall from '@/app/ui/project/modules/HeroSmall'

export default function Home() {
	const postMetaData = getPostMetadata('posts')
	return (
		<>
			<Header location="blog" />
			<main className="main">
				<HeroSmall title="Articles" />
				{postMetaData.map((post, postIndex) => (
					<IndexItem key={postIndex} post={post} location="indexMain" />
				))}
			</main>
		</>
	)
}
