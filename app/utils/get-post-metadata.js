import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath){
	const folder = './posts';
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter(file => file.endsWith('.md'));
	// Get file data
	const posts = markdownPosts.map((fileName) => {
		const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
		const matterResult = matter(fileContents)
		return {
			timestamp : Math.floor(new Date(matterResult.data.date).getTime() / 1000),
			date : matterResult.data.date,
			title : matterResult.data.title,
			excerpt : matterResult.data.excerpt,
			tags : matterResult.data.tags,
			slug : fileName.replace('.md',''),
		}
	});

	const sortByFirstValue = (arr) => {
		return arr.sort((a, b) => {
			const firstValueA = Object.values(a)[0];
			const firstValueB = Object.values(b)[0];
			return firstValueB - firstValueA;
		});
	}

	const sortedPosts = sortByFirstValue(posts);

	return sortedPosts
}

