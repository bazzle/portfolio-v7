import fs from 'fs';
import matter from 'gray-matter';

export default function getTags(){
        const folder = './posts';
        const files = fs.readdirSync(folder);
        const markdownPosts = files.filter(file => file.endsWith('.md'));
        const tagSet = new Set();
        markdownPosts.forEach((fileName)=>{
                const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
                const matterResult = matter(fileContents);
                const tags = matterResult.data.tags || [];
                tags.forEach(tag => tagSet.add(tag));
        });
        return Array.from(tagSet);
}
