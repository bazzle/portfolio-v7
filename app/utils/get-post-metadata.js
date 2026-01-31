import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function getPostMetadata(basePath){
	const postsDir = path.join(process.cwd(), basePath || 'posts');
	const entries = fs.readdirSync(postsDir, { withFileTypes: true });

	const posts = entries
		.filter((entry) => entry.isDirectory())
		.map((entry) => {
			const slug = entry.name;
			const filePath = path.join(postsDir, slug, 'index.md');
			if (!fs.existsSync(filePath)) return null;

			const fileContents = fs.readFileSync(filePath, 'utf8');
			const matterResult = matter(fileContents);

			return {
				timestamp: Math.floor(new Date(matterResult.data.date).getTime() / 1000),
				date: matterResult.data.date,
				title: matterResult.data.title,
				excerpt: matterResult.data.excerpt,
				tags: matterResult.data.tags,
				slug,
			};
		})
		.filter(Boolean);

	return posts.sort((a, b) => b.timestamp - a.timestamp);
}
