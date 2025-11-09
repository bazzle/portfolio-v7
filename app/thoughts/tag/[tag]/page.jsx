import IndexItem from '@/app/ui/modules/blog/IndexItem';
import getPostsByTag from '@/app/utils/get-posts-by-tag.js';
import getTags from '@/app/utils/get-tags.js';
import ArticleHero from '@/app/ui/modules/blog/Article/ArticleHero';
import AfterArchive from '@/app/ui/modules/blog/Article/AfterArticle';
import Header from "@/app/ui/modules/Header";

function getPosts(tag){
	return getPostsByTag(tag);
}

export const generateStaticParams = async () => {
	const tags = getTags();
	return tags.map(tag => ({ tag }));
};

export const dynamicParams = false;

export async function generateMetadata({ params }) {
	const { tag } = await params;
	return {
			title: `${tag} posts - My Thoughts`
	};
}

export default async function TagArchivePage({ params }) {
	const { tag } = await params;
	const posts = getPosts(tag);
	return (
		<>
			<Header location="blog" />
			<main className="main">
				<ArticleHero title={`Tag — ${tag}`} />
				<div className="content-container">
					{posts.map((post, index) => (
						<IndexItem key={index} post={post} location="indexTag" />
					))}
				</div>
				<AfterArchive/>
			</main>
		</>
	);
}
