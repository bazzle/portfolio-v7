import IndexItem from '@/app/ui/project/modules/blog/IndexItem'
import getPostsByTag from '@/app/utils/get-posts-by-tag.js'
import getTags from '@/app/utils/get-tags.js'
import SlugifyString from '@/app/utils/slugify-string.js'
import HeroSmall from '@/app/ui/project/modules/HeroSmall'
import AfterArchive from '@/app/ui/project/modules/blog/AfterArchive'
import Header from '@/app/ui/project/modules/Header'
import { headerTitle } from '@/app/content/BodyContent'

function resolveTagFromSlug(tagSlug) {
	const tags = getTags()
	return (
		tags.find((tag) => SlugifyString(tag) === tagSlug) ??
		tagSlug.replace(/-/g, ' ')
	)
}

function getPosts(tagSlug) {
	const resolvedTag = resolveTagFromSlug(tagSlug)
	return getPostsByTag(resolvedTag)
}

export const generateStaticParams = async () => {
	const tags = getTags()
	return tags.map((tag) => ({ tag: SlugifyString(tag) }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
	const { tag } = await params
	const tagTitle = resolveTagFromSlug(tag)
	return {
		title: `${tagTitle} posts - My Thoughts`,
	}
}

export default async function TagArchivePage({ params }) {
	const { tag } = await params
	const tagTitle = resolveTagFromSlug(tag)
	const posts = getPosts(tag)
	const headerLinks = [{
		'text': 'Showcase and Thoughts',
		'target': '/thoughts',
		'arrowDirection': 'reverse',
	}, {
		'text': 'Homepage',
		'target': '/',
		'arrowDirection': false,
	}]
	return (
		<>
			<Header
				headerTitle={headerTitle}
				headingLevel={2}
				navLinks={headerLinks}
			/>
			<main className="main">
				<HeroSmall title={`Posts tagged with: ${tagTitle}`} />
				<div>
					{posts.map((post, index) => (
						<IndexItem key={index} post={post} />
					))}
				</div>
				<AfterArchive />
			</main>
		</>
	)
}
