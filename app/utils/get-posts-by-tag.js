import getPostMetadata from './get-post-metadata.js';

export default function getPostsByTag(tag){
        const posts = getPostMetadata('posts');
        return posts.filter(post => post.tags && post.tags.includes(tag));
}
