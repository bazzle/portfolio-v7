import getPostMetadata from './get-post-metadata.js'

export default function getTags(){
	// Check all posts tags, and aggregate them into an array
	// Use set() to prevent duplication

	const tagSet = new Set()
	const posts = getPostMetadata('posts')

	posts.forEach((post) => {
		const { tags } = post
		if (Array.isArray(tags)) {
			tags.forEach((tag) => tagSet.add(tag))
		} else if (typeof tags === 'string' && tags) {
			tagSet.add(tags)
		}
	})
	
	return Array.from(tagSet).sort()	
}
