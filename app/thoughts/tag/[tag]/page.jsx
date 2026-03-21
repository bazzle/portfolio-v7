import IndexItem from '@/app/ui/modules/blog/IndexItem'
import getPostsByTag from '@/app/utils/get-posts-by-tag.js'
import getTags from '@/app/utils/get-tags.js'
import SlugifyString from '@/app/utils/slugify-string.js'
import HeroArticle from '@/app/ui/modules/HeroArticle'
import AfterArchive from '@/app/ui/modules/blog/AfterArchive'
import Header from '@/app/ui/modules/Header'

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
	return (
		<>
			<Header location="tag-single" />
			<main className="main">
				<HeroArticle title={tagTitle} />
				<h1>{tagTitle}</h1>
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
